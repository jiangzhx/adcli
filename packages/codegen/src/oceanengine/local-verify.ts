import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ts from "typescript";

import { analyzeGoFile, type GoApiFacts } from "./ast-analyzer";

export interface VerifyIssue {
  rule: string;
  detail: string;
  fix?: string;
  severity: "must-fix" | "should-fix" | "nit";
}

export interface VerifyResult {
  ok: boolean;
  issues: VerifyIssue[];
}

export interface VerifyPortedFileOptions {
  goPath: string;
  tsPath: string;
}

export async function verifyPortedFile(options: VerifyPortedFileOptions): Promise<VerifyResult> {
  const facts = await analyzeGoFile(options.goPath);
  const tsSource = await readFile(options.tsPath, "utf8");
  if (facts.kind === "api") {
    return verifyApi(facts, tsSource, options.tsPath);
  }
  return { ok: true, issues: [] };
}

function verifyApi(facts: GoApiFacts, tsSource: string, filename: string): VerifyResult {
  const sourceFile = ts.createSourceFile(filename, tsSource, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const issues: VerifyIssue[] = [];
  const apiCall = findRequestCall(sourceFile);

  if (!findClass(sourceFile, facts.className)) {
    issues.push(mustFix("api.className", `缺少 class ${facts.className}`, `导出 class ${facts.className}。`));
  }

  if (!findMethod(sourceFile, `${facts.methodName}WithHttpInfo`)) {
    issues.push(
      mustFix(
        "api.methodWithHttpInfo",
        `缺少 method ${facts.methodName}WithHttpInfo`,
        `添加 ${facts.methodName}WithHttpInfo(request)，并调用 apiClient.requestWithHttpInfo。`,
      ),
    );
  }

  if (!apiCall) {
    issues.push(
      mustFix(
        "api.requestCall",
        "缺少 apiClient.requestWithHttpInfo 调用",
        "按 Go API contract 调用 this.apiClient.requestWithHttpInfo。",
      ),
    );
    return { ok: false, issues };
  }

  if (apiCall.responseType !== facts.responseType) {
    issues.push(
      mustFix(
        "api.responseType",
        `response type 不一致：期望 ${facts.responseType}，实际 ${apiCall.responseType || "（缺失）"}`,
        `使用 requestWithHttpInfo<${facts.responseType}>。`,
      ),
    );
  }

  if (apiCall.method !== facts.httpMethod) {
    issues.push(
      mustFix(
        "api.httpMethod",
        `HTTP method 不一致：期望 ${facts.httpMethod}，实际 ${apiCall.method || "（缺失）"}`,
        `把 method 设置为 "${facts.httpMethod}"。`,
      ),
    );
  }

  if (apiCall.path !== facts.path) {
    issues.push(
      mustFix(
        "api.path",
        `path 不一致：期望 ${facts.path}，实际 ${apiCall.path || "（缺失）"}`,
        `把 path 设置为 "${facts.path}"。`,
      ),
    );
  }

  const actualQueryParams = collectQueryParams(sourceFile);
  for (const expected of facts.queryParams) {
    if (!actualQueryParams.some(param => param.name === expected.name && param.source === `request.${expected.source}`)) {
      issues.push(
        mustFix(
          "api.queryParams",
          `缺少来自 request.${expected.source} 的 query param ${expected.name}`,
          `添加 query param { name: "${expected.name}", value: request.${expected.source} }。`,
        ),
      );
    }
  }

  return { ok: issues.length === 0, issues };
}

function findClass(sourceFile: ts.SourceFile, name: string): boolean {
  return sourceFile.statements.some(statement => ts.isClassDeclaration(statement) && statement.name?.text === name);
}

function findMethod(sourceFile: ts.SourceFile, name: string): boolean {
  let found = false;
  visit(sourceFile, node => {
    if (ts.isMethodDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === name) {
      found = true;
    }
  });
  return found;
}

interface RequestCallFacts {
  responseType?: string;
  method?: string;
  path?: string;
}

function findRequestCall(sourceFile: ts.SourceFile): RequestCallFacts | undefined {
  let result: RequestCallFacts | undefined;
  visit(sourceFile, node => {
    if (result || !ts.isCallExpression(node)) {
      return;
    }
    if (!ts.isPropertyAccessExpression(node.expression) || node.expression.name.text !== "requestWithHttpInfo") {
      return;
    }
    const objectLiteral = node.arguments.find(ts.isObjectLiteralExpression);
    result = {
      responseType: node.typeArguments?.[0]?.getText(sourceFile),
      method: objectLiteral ? stringProperty(objectLiteral, "method") : undefined,
      path: objectLiteral ? stringProperty(objectLiteral, "path") : undefined,
    };
  });
  return result;
}

interface TsParamFact {
  name: string;
  source: string;
}

function collectQueryParams(sourceFile: ts.SourceFile): TsParamFact[] {
  const params: TsParamFact[] = [];
  visit(sourceFile, node => {
    if (!ts.isObjectLiteralExpression(node)) {
      return;
    }
    const name = stringProperty(node, "name");
    const source = expressionProperty(node, "value")?.getText(sourceFile);
    if (name && source?.startsWith("request.")) {
      params.push({ name, source });
    }
  });
  return params;
}

function stringProperty(objectLiteral: ts.ObjectLiteralExpression, name: string): string | undefined {
  const expr = expressionProperty(objectLiteral, name);
  if (!expr || !ts.isStringLiteralLike(expr)) {
    return undefined;
  }
  return expr.text;
}

function expressionProperty(objectLiteral: ts.ObjectLiteralExpression, name: string): ts.Expression | undefined {
  for (const property of objectLiteral.properties) {
    if (!ts.isPropertyAssignment(property) || !isPropertyName(property.name, name)) {
      continue;
    }
    return property.initializer;
  }
  return undefined;
}

function isPropertyName(name: ts.PropertyName, expected: string): boolean {
  return (ts.isIdentifier(name) || ts.isStringLiteralLike(name)) && name.text === expected;
}

function visit(node: ts.Node, callback: (node: ts.Node) => void): void {
  callback(node);
  ts.forEachChild(node, child => visit(child, callback));
}

function mustFix(rule: string, detail: string, fix: string): VerifyIssue {
  return { rule, detail, fix, severity: "must-fix" };
}

async function main(): Promise<void> {
  const [goPath, tsPath] = process.argv.slice(2);
  if (!goPath || !tsPath) {
    console.error("用法：bun src/oceanengine/local-verify.ts <go-file> <ts-file>");
    process.exitCode = 1;
    return;
  }
  const result = await verifyPortedFile({ goPath, tsPath });
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = result.ok ? 0 : 1;
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryPath === fileURLToPath(import.meta.url)) {
  await main();
}
