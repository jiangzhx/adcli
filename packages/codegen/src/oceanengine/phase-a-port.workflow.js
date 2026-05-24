export const meta = {
  name: "phase-a-port",
  description: "Phase A: draft .ts for OceanEngine Go SDK files (implement -> verify -> fix)",
  phases: [
    { title: "Implement", detail: "one agent per Go file writes draft .ts per PORTING.md" },
    { title: "Verify", detail: "adversarial check of .ts against Go source + PORTING.md rules" },
    { title: "Fix", detail: "apply verifier findings to .ts" },
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
};

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
  log(`batch: 0 files, ${discovery.skipped.length} skipped-existing`);
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
  `batch: ${FILES.length} files, ${FILES.reduce((total, file) => total + file.loc, 0)} Go LOC total, ${discovery.skipped.length} skipped-existing`,
);

const IMPL_SCHEMA = {
  type: "object",
  required: ["ts_path", "confidence", "todos", "ts_loc"],
  properties: {
    ts_path: { type: "string", description: "absolute path of the .ts file you wrote" },
    confidence: { enum: ["high", "medium", "low"] },
    todos: { type: "integer" },
    ts_loc: { type: "integer" },
    skipped: { type: "boolean", description: "true only if the Go file has no SDK surface to port" },
    note: { type: "string", description: "one short note for the port status trailer" },
  },
};

const VERIFY_SCHEMA = {
  type: "object",
  required: ["ok", "issues"],
  properties: {
    ok: { type: "boolean", description: "true if no must-fix issues found" },
    issues: {
      type: "array",
      items: {
        type: "object",
        required: ["rule", "detail", "severity"],
        properties: {
          rule: { type: "string", description: "PORTING.md section or rule violated" },
          detail: { type: "string", description: "what is wrong and where" },
          fix: { type: "string", description: "exact correction to apply" },
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
    remaining: { type: "integer", description: "must-fix issues you could not resolve" },
    note: { type: "string" },
  },
};

const implementPrompt = file => `
You are a Phase-A porting agent.

Your ONLY job: translate one OceanEngine official Go SDK file to a draft TypeScript file.

1. Read ${GUIDE}. Read the WHOLE file. Every rule is load-bearing.
2. Read ${file.go} (${file.loc} lines).${file.loc > 1200 ? " This may exceed default reads; read in segments until you have the whole file." : ""}
3. Write the .ts file to EXACTLY this path: ${file.ts}. Do not pick a different path.
4. Create parent directories if needed.
5. Match the Go file's SDK surface: API class/request shape, model shape, runtime/client shape, HTTP method/path, validation, body/form/file/query params, response type, and ID precision.
6. End with the PORT STATUS trailer required by PORTING.md.
7. Return structured output with ts_path set to the exact path above.

Do not run builds. Do not run tests. Do not git anything.
If the file is a tiny helper with no SDK surface, write the closest faithful TypeScript equivalent and set skipped=false unless there is truly nothing to port.
`.trim();

const verifyPrompt = (file, impl) => `
You are an adversarial Phase-A verifier.

Find every place the draft .ts DEVIATES from PORTING.md or from the Go source.

1. Read ${GUIDE}.
2. Read ${file.go} (source of truth for SDK behavior).
3. Read ${impl.ts_path} (the draft).

High-value targets:

- API class name does not match Go service name without Service.
- Request interface name does not follow ClassName + UpperFirst(methodName) + Request.
- API method uses positional args instead of one request object.
- Missing method or missing methodWithHttpInfo.
- getApiClient/setApiClient missing.
- HTTP method or path differs from Go.
- query/form/file/body params differ from Go names or sources.
- Go ReportError validation is missing, invented, or has a different message.
- ID-shaped int64 was mapped to number instead of number | string.
- []byte response does not return ArrayBuffer or lacks responseType: "arrayBuffer".
- Model property uses Go field name instead of JSON tag name.
- omitempty optionality is wrong.
- enum keys do not strip the enum suffix or enum values changed.
- Runtime behavior was copied into an ordinary API/model file.
- Runtime/client/config/middleware exports do not match PORTING.md.
- Imports include primitive types or miss referenced model types.
- PORT STATUS trailer missing or inaccurate.
- Dropped SDK behavior compared with the Go source.

Do NOT flag unresolved imports that are expected to be wired later if the import shape follows PORTING.md.
Default to ok=false if you find any must-fix issue.
Be specific: name the class, method, field, or approximate line and the exact wrong -> right correction.
`.trim();

const fixPrompt = (file, impl, ver) => `
You are a Phase-A fixer.

Apply verifier findings to the draft .ts. Nothing else.

1. Read ${GUIDE} for the rules cited by the verifier.
2. Read ${impl.ts_path}.
3. Read ${file.go} only if an issue says logic or SDK behavior was dropped.
4. Apply each must-fix and should-fix below using surgical edits.
5. Update the PORT STATUS trailer.

Issues (JSON):
${JSON.stringify(ver.issues, null, 2)}

Do not rewrite the whole file. Surgical edits only.
If an issue is wrong, skip it and note why in the structured output.
`.trim();

function labelFor(file) {
  return file.relativePath.replace(/\.go$/, "");
}

const results = await pipeline(
  FILES,
  file =>
    agent(implementPrompt(file), {
      label: `impl:${labelFor(file)}`,
      phase: "Implement",
      schema: IMPL_SCHEMA,
    }),
  (impl, file) => {
    if (!impl) {
      return { ok: false, issues: [], _impl: null, _skip: true };
    }
    impl.ts_path = file.ts;
    return agent(verifyPrompt(file, impl), {
      label: `verify:${labelFor(file)}`,
      phase: "Verify",
      schema: VERIFY_SCHEMA,
    }).then(ver => ({ ...ver, _impl: impl }));
  },
  (ver, file) => {
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
      phase: "Fix",
      schema: FIX_SCHEMA,
    }).then(fix => ({
      file: file.go,
      ts: impl.ts_path,
      status: "fixed",
      confidence: impl.confidence,
      todos: impl.todos,
      ts_loc: impl.ts_loc,
      issues_found: mustFix.length,
      applied: fix ? fix.applied : 0,
      remaining: fix ? fix.remaining : mustFix.length,
      skipped: !!impl.skipped,
    }));
  },
);

const ok = results.filter(result => result && (result.status === "clean" || result.status === "fixed"));
const failed = results.filter(result => !result || result.status === "impl-failed");

log(`done: ${ok.length}/${FILES.length} ok, ${failed.length} impl-failed`);

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
