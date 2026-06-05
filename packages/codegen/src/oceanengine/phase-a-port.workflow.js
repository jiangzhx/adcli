export const meta = {
  name: "phase-a-port",
  description: "阶段 A：为 OceanEngine Go SDK 文件生成 .ts 草稿（分析 -> 调度 -> 实现 -> 校验 -> 修复）",
  phases: [
    { title: "分析", detail: "本地分析 Go 文件并给出 api/model/unknown 分类" },
    { title: "调度", detail: "由调度 prompt 基于分类路由到本地确定性路径或 AI 迁移路径" },
    { title: "实现", detail: "按调度结果真正执行：本地 model codegen 或 agent port" },
    { title: "校验", detail: "对照 Go 源码和 PORTING.md 规则审查 .ts 草稿" },
    { title: "修复", detail: "把校验发现的问题应用到 .ts 文件" },
  ],
};

const CODEGEN_ROOT = process.env.ADCLI_CODEGEN_ROOT || "/Users/sylar/workspace/startup/adcli/packages/codegen";
const GUIDE = `${CODEGEN_ROOT}/src/oceanengine/PORTING.md`;
const DEFAULT_SOURCE_ROOT = "/Users/sylar/workspace/opensource/ad_open_sdk_go";
const DEFAULT_INPUT = DEFAULT_SOURCE_ROOT;
const DEFAULT_OUTPUT_ROOT = DEFAULT_SOURCE_ROOT;
const DEFAULT_INCLUDE = ["*.go", "api/*.go", "config/*.go", "middleware/*.go"];
const input = process.env.ADCLI_WORKFLOW_INPUT || DEFAULT_INPUT;

const CONFIG = {
  input,
  sourceRoot: process.env.ADCLI_WORKFLOW_SOURCE_ROOT || (input.startsWith(DEFAULT_SOURCE_ROOT) ? DEFAULT_SOURCE_ROOT : undefined),
  outputRoot: process.env.ADCLI_WORKFLOW_OUTPUT_ROOT || DEFAULT_OUTPUT_ROOT,
  include: parseList(process.env.ADCLI_WORKFLOW_INCLUDE) || DEFAULT_INCLUDE,
  outputExtension: ".ts",
  skipExisting: process.env.ADCLI_WORKFLOW_SKIP_EXISTING !== "0",
  overwrite: process.env.ADCLI_WORKFLOW_OVERWRITE === "1",
  verifyMode: process.env.ADCLI_WORKFLOW_VERIFY_MODE === "agent" ? "agent" : "local",
};

const OCEANENGINE_TOOL_NAMES = [
  "oceanengine_analyze_ast",
  "oceanengine_generate_model",
  "oceanengine_verify_port",
];

const localVerifyModule =
  CONFIG.verifyMode === "local" ? await import(`file://${CODEGEN_ROOT}/src/oceanengine/local-verify.ts`) : undefined;
const astAnalyzerModule = await import(`file://${CODEGEN_ROOT}/src/oceanengine/ast-analyzer.ts`);
const modelCodegenModule = await import(`file://${CODEGEN_ROOT}/src/oceanengine/model-codegen.ts`);

function parseList(value) {
  if (!value) {
    return undefined;
  }
  const items = value
    .split(",")
    .map(item => item.trim())
    .filter(Boolean);
  return items.length > 0 ? items : undefined;
}

const discovery = await discoverInputs(CONFIG);
const FILES = discovery.queued.map(file => ({
  ...file,
  go: file.sourcePath,
  ts: file.outPath,
}));

if (FILES.length === 0) {
  log(`批次：0 个文件，${discovery.skipped.length} 个已存在输出被跳过`);
  return {
    total: 0,
    skipped_existing: discovery.skipped.length,
    clean: 0,
    fixed: 0,
    failed: [],
    results: [],
  };
}

log(
  `批次：${FILES.length} 个文件，Go 源码共 ${FILES.reduce((total, file) => total + file.loc, 0)} 行，${discovery.skipped.length} 个已存在输出被跳过`,
);

const SCHEDULE_SCHEMA = {
  type: "object",
  required: ["route", "reason", "confidence", "implementationToolNames"],
  properties: {
    route: {
      enum: ["local_model_codegen", "agent_port"],
      description: "local_model_codegen 表示由 workflow 本地确定性生成；agent_port 表示进入实现 agent。",
    },
    reason: { type: "string", description: "一句话说明为什么选择该路线。" },
    confidence: { enum: ["high", "medium", "low"] },
    implementationToolNames: {
      type: "array",
      items: { enum: OCEANENGINE_TOOL_NAMES },
      description: "只有 route=agent_port 时生效，表示实现 agent 可用的 workflow tools。",
    },
  },
};

phase("分析");
const ANALYZED_FILES = await parallel(
  FILES.map(file => async () => analyzeFile(file)),
);

phase("调度");
const SCHEDULED_FILES = await parallel(
  ANALYZED_FILES.map(file => async () => scheduleFile(file)),
);

const IMPL_SCHEMA = {
  type: "object",
  required: ["ts_path", "confidence", "todos", "ts_loc"],
  properties: {
    ts_path: { type: "string", description: "你写入的 .ts 文件绝对路径" },
    confidence: { enum: ["high", "medium", "low"] },
    todos: { type: "integer" },
    ts_loc: { type: "integer" },
    skipped: { type: "boolean", description: "只有当 Go 文件确实没有可迁移的 SDK surface 时才为 true" },
    note: { type: "string", description: "写入 port status trailer 的一句简短说明" },
  },
};

const VERIFY_SCHEMA = {
  type: "object",
  required: ["ok", "issues"],
  properties: {
    ok: { type: "boolean", description: "没有 must-fix 问题时为 true" },
    issues: {
      type: "array",
      items: {
        type: "object",
        required: ["rule", "detail", "severity"],
        properties: {
          rule: { type: "string", description: "违反的 PORTING.md 小节或规则" },
          detail: { type: "string", description: "哪里出了什么问题" },
          fix: { type: "string", description: "需要应用的精确修正" },
          severity: { enum: ["must-fix", "should-fix", "nit"] },
        },
      },
    },
  },
};

const FIX_SCHEMA = {
  type: "object",
  required: ["applied", "remaining"],
  properties: {
    applied: { type: "integer" },
    remaining: { type: "integer", description: "仍无法解决的 must-fix 问题数量" },
    note: { type: "string" },
  },
};

async function analyzeFile(file) {
  try {
    const facts = await astAnalyzerModule.analyzeGoFile(file.go);
    const analysis = {
      kind: facts.kind,
      facts,
    };
    log(`分析 ${labelFor(file)} -> ${analysis.kind}`);
    return {
      ...file,
      analysis,
    };
  } catch (error) {
    log(`分析 ${labelFor(file)} 失败，按 unknown 处理`, {
      error: error instanceof Error ? error.message : String(error),
    });
    return {
      ...file,
      analysis: {
        kind: "unknown",
      },
    };
  }
}

function schedulePrompt(file) {
  return `
你是 Phase-A 调度 agent。

你的唯一任务：根据本地分析阶段给出的分类决定当前文件走哪条实现路线。不要迁移代码，不要写文件，不要调用工具。

可选路线：

- local_model_codegen：当 classification 是 model 时选择。workflow 会本地调用确定性 model generator。
- agent_port：当 classification 是 api 或 unknown 时选择，由实现 agent 按迁移规范处理。

输入：
${JSON.stringify(scheduleInput(file), null, 2)}

决策要求：

- 如果 route=local_model_codegen，implementationToolNames 必须是 []。
- 如果 route=agent_port，implementationToolNames 只填实现 agent 真正需要的 workflow tools：
  - API 文件通常填 ["oceanengine_analyze_ast", "oceanengine_verify_port"]。
  - unknown 文件填 ["oceanengine_analyze_ast", "oceanengine_generate_model", "oceanengine_verify_port"]。
- 返回结构化输出。
`.trim();
}

async function scheduleFile(file) {
  const schedule = await agent(schedulePrompt(file), {
    label: `schedule:${labelFor(file)}`,
    phase: "调度",
    schema: SCHEDULE_SCHEMA,
  });
  const normalized = normalizeSchedule(schedule, file);
  log(`调度 ${labelFor(file)} -> ${normalized.failed ? "failed" : normalized.route}`, {
    reason: normalized.reason,
    confidence: normalized.confidence,
    implementationToolNames: normalized.implementationToolNames,
  });
  return {
    ...file,
    schedule: normalized,
  };
}

const implementPrompt = file => `
你是 Phase-A 迁移 agent。

你的唯一任务：把一个 OceanEngine 官方 Go SDK 文件迁移成 TypeScript 草稿文件。

本地 AST 分类结果：${file.analysis.kind}
调度结果：${JSON.stringify(file.schedule)}

1. 阅读 ${GUIDE}。必须读完整文件，每条规则都有效。
2. 阅读 ${file.go}（${file.loc} 行）。${file.loc > 1200 ? "这个文件可能超过默认读取范围，请分段读取直到看完整个文件。" : ""}
3. 按 ${GUIDE} 的“工具使用契约”调用普通工具。当前文件路径：goPath=${file.go}，tsPath=${file.ts}。
4. 基于调度结果执行实现：当前文件已经被调度到 agent_port。按源码和 PORTING.md 手写迁移；可按需调用调度结果允许的普通工具核对细节。
5. 对齐 Go 文件的 SDK surface：API class/request 形态、model 形态、runtime/client 形态、HTTP method/path、validation、body/form/file/query params、response type 和 ID 精度。
6. 把 .ts 文件写入这个精确路径：${file.ts}。不要选择其他路径。
7. 如有需要，创建父目录。
8. 手写迁移文件必须按 PORTING.md 要求在结尾写入 PORT STATUS trailer。工具生成的 model 文件不需要 trailer。
9. 返回结构化输出，并把 ts_path 设置为上面的精确路径。

不要运行 build。不要运行 test。不要执行任何 git 操作。
如果文件只是很小的 helper 且没有明显 SDK surface，也要写出最接近且忠实的 TypeScript 等价实现，并设置 skipped=false；只有确实没有任何内容可迁移时才设置 skipped=true。
`.trim();

const verifyPrompt = (file, impl) => `
你是 Phase-A 对抗式校验 agent。

找出 .ts 草稿中所有偏离 PORTING.md 或 Go 源码的地方。

1. 阅读 ${GUIDE}。
2. 阅读 ${file.go}（SDK 行为的事实来源）。
3. 阅读 ${impl.ts_path}（草稿）。

重点检查：

- API class name 没有匹配 Go service name 去掉 Service 后的名称。
- Request interface name 没有遵循 ClassName + UpperFirst(methodName) + Request。
- API method 使用 positional args，而不是单个 request object。
- 缺少 method 或 methodWithHttpInfo。
- 缺少 getApiClient/setApiClient。
- HTTP method 或 path 与 Go 不一致。
- query/form/file/body params 与 Go 的名称或来源不一致。
- Go ReportError validation 缺失、凭空新增，或错误消息不同。
- ID 形态的 int64 被映射为 number，而不是 number | string。
- []byte response 没有返回 ArrayBuffer，或缺少 responseType: "arrayBuffer"。
- Model property 使用了 Go field name，而不是 JSON tag name。
- omitempty optionality 错误。
- enum keys 没有去掉 enum suffix，或 enum values 被改变。
- runtime 行为被复制到了普通 API/model 文件中。
- runtime/client/config/middleware exports 不符合 PORTING.md。
- Imports 包含 primitive types，或遗漏被引用的 model types。
- PORT STATUS trailer 缺失或不准确。
- 相比 Go 源码遗漏了 SDK 行为。

如果 import 形态符合 PORTING.md，且 unresolved imports 预计后续统一接线，不要报告这类问题。
只要发现任何 must-fix 问题，默认 ok=false。
必须具体：指出 class、method、field 或大致行号，并给出精确的“错误 -> 正确”修正。
`.trim();

const fixPrompt = (file, impl, ver) => `
你是 Phase-A 修复 agent。

只把 verifier findings 应用到 .ts 草稿。不要做其他事情。

1. 阅读 ${GUIDE}，确认 verifier 引用的规则。
2. 阅读 ${impl.ts_path}。
3. 只有当 issue 指出逻辑或 SDK 行为被遗漏时，才阅读 ${file.go}。
4. 用外科手术式小改动应用下面每个 must-fix 和 should-fix。
5. 更新 PORT STATUS trailer。

问题列表（JSON）：
${JSON.stringify(ver.issues, null, 2)}

不要重写整个文件。只做精确小改动。
如果某个 issue 是错的，跳过它，并在结构化输出中说明原因。
`.trim();

function labelFor(file) {
  return file.relativePath.replace(/\.go$/, "");
}

function verifyWithAgent(file, impl) {
  return agent(verifyPrompt(file, impl), {
    label: `verify:${labelFor(file)}`,
    phase: "校验",
    schema: VERIFY_SCHEMA,
    toolNames: ["oceanengine_analyze_ast", "oceanengine_verify_port"],
  });
}

function implementToolNames(file) {
  return file.schedule.implementationToolNames;
}

function scheduleInput(file) {
  return {
    relativePath: file.relativePath,
    loc: file.loc,
    classification: file.analysis.kind,
  };
}

function normalizeSchedule(schedule, file) {
  if (!schedule || typeof schedule !== "object" || Array.isArray(schedule)) {
    return scheduleFailure("调度 agent 没有返回结构化对象");
  }
  if (schedule.route !== "local_model_codegen" && schedule.route !== "agent_port") {
    return scheduleFailure(`调度 agent 返回了无效 route：${String(schedule.route)}`);
  }
  const route = schedule.route;
  const requestedTools = Array.isArray(schedule.implementationToolNames) ? schedule.implementationToolNames : [];
  const implementationToolNames =
    route === "local_model_codegen"
      ? []
      : requestedTools.filter(toolName => OCEANENGINE_TOOL_NAMES.includes(toolName));
  return {
    route,
    reason: typeof schedule.reason === "string" ? schedule.reason : "调度 agent 未提供 reason",
    confidence: ["high", "medium", "low"].includes(schedule.confidence) ? schedule.confidence : "low",
    implementationToolNames,
  };
}

function scheduleFailure(reason) {
  return {
    failed: true,
    reason,
    confidence: "low",
    implementationToolNames: [],
  };
}

function normalizeImplementationResult(impl, file) {
  if (!impl || typeof impl !== "object" || Array.isArray(impl)) {
    log(`实现 ${labelFor(file)} 返回无效结构化结果`, {
      receivedType: impl === null ? "null" : typeof impl,
    });
    return null;
  }
  if (typeof impl.ts_path !== "string") {
    log(`实现 ${labelFor(file)} 缺少 ts_path，跳过校验`, {
      keys: Object.keys(impl),
    });
    return null;
  }
  impl.ts_path = file.ts;
  return impl;
}

async function verifyDraft(file, impl) {
  if (CONFIG.verifyMode === "agent") {
    return verifyWithAgent(file, impl);
  }

  try {
    const ver = await localVerifyModule.verifyPortedFile({
      goPath: file.go,
      tsPath: impl.ts_path,
    });
    log(`本地校验 ${labelFor(file)} ${ver.ok ? "通过" : `${ver.issues.length} 个问题`}`);
    return ver;
  } catch (error) {
    log(`本地校验 ${labelFor(file)} 失败，回退到 agent 校验`, {
      error: error instanceof Error ? error.message : String(error),
    });
    return verifyWithAgent(file, impl);
  }
}

async function implementFile(file) {
  if (file.schedule.failed) {
    log(`跳过实现 ${labelFor(file)}：调度失败`, {
      reason: file.schedule.reason,
    });
    return {
      schedule_failed: true,
      reason: file.schedule.reason,
    };
  }

  if (file.schedule.route === "local_model_codegen") {
    const result = await modelCodegenModule.generateModelFromGoFile({
      goPath: file.go,
      tsPath: file.ts,
    });
    log(`本地生成 model ${labelFor(file)} -> ${result.modelName}`, {
      modelKind: result.modelKind,
      tsLoc: result.tsLoc,
    });
    return {
      ts_path: file.ts,
      confidence: file.schedule.confidence,
      todos: 0,
      ts_loc: result.tsLoc,
      skipped: false,
      note: `local model codegen: ${result.modelName}`,
    };
  }

  return agent(implementPrompt(file), {
    label: `impl:${labelFor(file)}`,
    phase: "实现",
    schema: IMPL_SCHEMA,
    toolNames: implementToolNames(file),
  });
}

const results = await pipeline(
  SCHEDULED_FILES,
  file => implementFile(file),
  (impl, file) => {
    if (impl && impl.schedule_failed) {
      return {
        ok: false,
        issues: [],
        _impl: null,
        _scheduleFailed: true,
        _reason: impl.reason,
      };
    }
    const normalizedImpl = normalizeImplementationResult(impl, file);
    if (!normalizedImpl) {
      return { ok: false, issues: [], _impl: null, _skip: true };
    }
    return verifyDraft(file, normalizedImpl).then(ver => ({ ...ver, _impl: normalizedImpl }));
  },
  (ver, file) => {
    if (ver && ver._scheduleFailed) {
      return {
        file: file.go,
        status: "schedule-failed",
        reason: ver._reason,
      };
    }
    const impl = ver && ver._impl;
    if (!impl) {
      return { file: file.go, status: "impl-failed" };
    }
    if (ver._skip) {
      return {
        file: file.go,
        ts: impl.ts_path,
        status: "verify-skipped",
        confidence: impl.confidence,
        todos: impl.todos,
      };
    }
    const mustFix = (ver.issues || []).filter(issue => issue.severity !== "nit");
    if (mustFix.length === 0) {
      return {
        file: file.go,
        ts: impl.ts_path,
        status: "clean",
        confidence: impl.confidence,
        todos: impl.todos,
        ts_loc: impl.ts_loc,
        skipped: !!impl.skipped,
      };
    }
    return agent(fixPrompt(file, impl, { issues: mustFix }), {
      label: `fix:${labelFor(file)}`,
      phase: "修复",
      schema: FIX_SCHEMA,
      toolNames: ["oceanengine_analyze_ast", "oceanengine_verify_port"],
    }).then(async fix => {
      const postFixVerify = CONFIG.verifyMode === "local" ? await verifyDraft(file, impl) : { ok: true, issues: [] };
      const remaining = postFixVerify.ok ? 0 : postFixVerify.issues.filter(issue => issue.severity !== "nit").length;
      return {
        file: file.go,
        ts: impl.ts_path,
        status: remaining === 0 ? "fixed" : "fix-failed",
        confidence: impl.confidence,
        todos: impl.todos,
        ts_loc: impl.ts_loc,
        issues_found: mustFix.length,
        applied: fix ? fix.applied : 0,
        remaining,
        remaining_issues: postFixVerify.ok ? [] : postFixVerify.issues,
        skipped: !!impl.skipped,
      };
    });
  },
);

const ok = results.filter(result => result && (result.status === "clean" || result.status === "fixed"));
const failed = results.filter(
  result => !result || result.status === "schedule-failed" || result.status === "impl-failed" || result.status === "fix-failed",
);

log(`完成：${ok.length}/${FILES.length} 个通过，${failed.length} 个失败`);

return {
  total: FILES.length,
  skipped_existing: discovery.skipped.length,
  clean: results.filter(result => result && result.status === "clean").length,
  fixed: results.filter(result => result && result.status === "fixed").length,
  failed: failed.map(result => result && result.file).filter(Boolean),
  by_confidence: {
    high: ok.filter(result => result.confidence === "high").length,
    medium: ok.filter(result => result.confidence === "medium").length,
    low: ok.filter(result => result.confidence === "low").length,
  },
  results,
};
