import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import ts from "typescript";

import { analyzeGoFile, type GoModelFacts } from "./ast-analyzer";

export interface GenerateModelOptions {
  goPath: string;
  tsPath: string;
  modelsModule?: string;
}

export interface GenerateModelResult {
  tsPath: string;
  modelName: string;
  modelKind: "interface" | "enum";
  tsLoc: number;
}

export async function generateModelFromGoFile(options: GenerateModelOptions): Promise<GenerateModelResult> {
  const facts = await analyzeGoFile(options.goPath);
  if (facts.kind !== "model") {
    throw new Error(`期望 ${options.goPath} 解析为 model facts，实际为 ${facts.kind}`);
  }

  const source = emitModelModuleFromFacts(facts, {
    modelsModule: options.modelsModule ?? "../models/index",
  });
  await mkdir(path.dirname(options.tsPath), { recursive: true });
  await writeFile(options.tsPath, source);

  return {
    tsPath: options.tsPath,
    modelName: facts.model.name,
    modelKind: facts.model.kind,
    tsLoc: source.trimEnd().split("\n").length,
  };
}

export function emitModelModuleFromFacts(facts: GoModelFacts, options: { modelsModule?: string } = {}): string {
  const statements: ts.Statement[] = [];
  const model = facts.model;
  const imports = model.kind === "interface" ? extractModelImports(model.name, model.fields) : [];

  if (imports.length > 0) {
    statements.push(emitImport(imports, options.modelsModule ?? "../models/index"));
  }

  if (model.kind === "enum") {
    statements.push(...emitEnumStatements(model));
  } else {
    statements.push(emitInterfaceStatement(model));
  }

  const sourceFile = ts.factory.createSourceFile(
    statements,
    ts.factory.createToken(ts.SyntaxKind.EndOfFileToken),
    ts.NodeFlags.None,
  );
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  return `${printer.printFile(sourceFile)}\n`;
}

function emitImport(names: string[], modulePath: string): ts.ImportDeclaration {
  return ts.factory.createImportDeclaration(
    undefined,
    ts.factory.createImportClause(
      true,
      undefined,
      ts.factory.createNamedImports(
        names.map(name => ts.factory.createImportSpecifier(false, undefined, ts.factory.createIdentifier(name))),
      ),
    ),
    ts.factory.createStringLiteral(modulePath),
  );
}

function emitInterfaceStatement(model: Extract<GoModelFacts["model"], { kind: "interface" }>): ts.InterfaceDeclaration {
  return ts.factory.createInterfaceDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(model.name),
    undefined,
    undefined,
    model.fields.map(field =>
      ts.factory.createPropertySignature(
        undefined,
        propertyName(field.jsonName),
        field.required ? undefined : ts.factory.createToken(ts.SyntaxKind.QuestionToken),
        goTypeToTypeNode(field.goType, field.jsonName),
      ),
    ),
  );
}

function emitEnumStatements(model: Extract<GoModelFacts["model"], { kind: "enum" }>): ts.Statement[] {
  const objectLiteral = ts.factory.createObjectLiteralExpression(
    model.values.map(value => ts.factory.createPropertyAssignment(propertyName(value.key), literalExpression(value.value))),
    true,
  );
  const constStatement = ts.factory.createVariableStatement(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createVariableDeclarationList(
      [
        ts.factory.createVariableDeclaration(
          ts.factory.createIdentifier(model.name),
          undefined,
          undefined,
          ts.factory.createAsExpression(objectLiteral, ts.factory.createTypeReferenceNode("const")),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
  const typeQuery = ts.factory.createTypeQueryNode(ts.factory.createIdentifier(model.name));
  const typeStatement = ts.factory.createTypeAliasDeclaration(
    [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    ts.factory.createIdentifier(model.name),
    undefined,
    ts.factory.createIndexedAccessTypeNode(
      typeQuery,
      ts.factory.createTypeOperatorNode(ts.SyntaxKind.KeyOfKeyword, typeQuery),
    ),
  );
  return [constStatement, typeStatement];
}

function propertyName(name: string): ts.PropertyName {
  return isIdentifier(name) ? ts.factory.createIdentifier(name) : ts.factory.createStringLiteral(name);
}

function literalExpression(value: string | number): ts.Expression {
  return typeof value === "number" ? ts.factory.createNumericLiteral(value) : ts.factory.createStringLiteral(value);
}

function goTypeToTypeNode(goType: string, nameHint?: string): ts.TypeNode {
  let normalized = stripPointers(goType.trim());
  if (normalized.startsWith("[]")) {
    return ts.factory.createArrayTypeNode(goTypeToArrayElementNode(normalized.slice(2), nameHint));
  }
  if (normalized.startsWith("map[string]")) {
    return ts.factory.createTypeReferenceNode("Record", [
      ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
      goTypeToTypeNode(normalized.slice("map[string]".length), nameHint),
    ]);
  }
  switch (normalized) {
    case "string":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    case "int":
    case "int32":
    case "float32":
    case "float64":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case "int64":
      return isUnsafeIntegerName(nameHint)
        ? ts.factory.createUnionTypeNode([
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
            ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          ])
        : ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    case "bool":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
    case "interface{}":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
    case "NullableTime":
      return ts.factory.createUnionTypeNode([
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        ts.factory.createLiteralTypeNode(ts.factory.createNull()),
      ]);
    case "time.Time":
      return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
    default:
      return ts.factory.createTypeReferenceNode(normalized);
  }
}

function goTypeToArrayElementNode(goType: string, nameHint?: string): ts.TypeNode {
  const typeNode = goTypeToTypeNode(goType, nameHint);
  return ts.isUnionTypeNode(typeNode) ? ts.factory.createParenthesizedType(typeNode) : typeNode;
}

function extractModelImports(
  selfName: string,
  fields: Array<{ jsonName: string; goType: string }>,
): string[] {
  return [
    ...new Set(
      fields.flatMap(field => extractModelTypeNames(field.goType)).filter(name => name !== selfName),
    ),
  ].sort();
}

function extractModelTypeNames(goType: string): string[] {
  const normalized = stripPointers(goType.trim());
  if (normalized.startsWith("[]")) {
    return extractModelTypeNames(normalized.slice(2));
  }
  if (normalized.startsWith("map[string]")) {
    return extractModelTypeNames(normalized.slice("map[string]".length));
  }
  if (isPrimitiveGoType(normalized)) {
    return [];
  }
  return [normalized];
}

function stripPointers(value: string): string {
  let normalized = value.trim();
  while (normalized.startsWith("*")) {
    normalized = normalized.slice(1);
  }
  return normalized;
}

function isPrimitiveGoType(value: string): boolean {
  return [
    "string",
    "int",
    "int32",
    "int64",
    "float32",
    "float64",
    "bool",
    "interface{}",
    "NullableTime",
    "time.Time",
  ].includes(value);
}

function isUnsafeIntegerName(name?: string): boolean {
  return Boolean(name && /^(?:id|ids)$/i.test(name)) || Boolean(name && /[_-]ids?$/i.test(name)) || Boolean(name && /Ids?$/.test(name));
}

function isIdentifier(value: string): boolean {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(value);
}

async function main(): Promise<void> {
  const [goPath, explicitTsPath] = process.argv.slice(2);
  if (!goPath) {
    console.error("用法：bun src/oceanengine/model-codegen.ts <model-go-file> [model-ts-file]");
    process.exitCode = 1;
    return;
  }
  const parsed = path.parse(goPath);
  const tsPath = explicitTsPath ?? path.join(parsed.dir, `${parsed.name}.ts`);
  const result = await generateModelFromGoFile({ goPath, tsPath });
  console.log(JSON.stringify(result, null, 2));
}

const entryPath = process.argv[1] ? path.resolve(process.argv[1]) : "";
if (entryPath === fileURLToPath(import.meta.url)) {
  await main();
}
