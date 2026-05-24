import { readFile } from "node:fs/promises";

export interface LoadWorkflowEnvOptions {
  env?: NodeJS.ProcessEnv;
}

export interface LoadWorkflowEnvResult {
  path: string;
  missing: boolean;
  loaded: string[];
  overwritten: string[];
}

export async function loadWorkflowEnvFile(
  filePath: string,
  options: LoadWorkflowEnvOptions = {},
): Promise<LoadWorkflowEnvResult> {
  const env = options.env ?? process.env;
  const result: LoadWorkflowEnvResult = {
    path: filePath,
    missing: false,
    loaded: [],
    overwritten: [],
  };

  let content: string;
  try {
    content = await readFile(filePath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return { ...result, missing: true };
    }
    throw error;
  }

  for (const [key, value] of Object.entries(parseEnvContent(content))) {
    if (env[key] !== undefined) {
      result.overwritten.push(key);
    }
    env[key] = value;
    result.loaded.push(key);
  }

  return result;
}

export function parseEnvContent(content: string): Record<string, string> {
  const values: Record<string, string> = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }

    const assignment = line.startsWith("export ") ? line.slice("export ".length).trimStart() : line;
    const separator = assignment.indexOf("=");
    if (separator === -1) {
      continue;
    }

    const key = assignment.slice(0, separator).trim();
    if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(key)) {
      continue;
    }

    values[key] = parseEnvValue(assignment.slice(separator + 1).trim());
  }
  return values;
}

function parseEnvValue(value: string): string {
  if (value.startsWith('"')) {
    return parseQuotedValue(value, '"').replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  }
  if (value.startsWith("'")) {
    return parseQuotedValue(value, "'");
  }
  return stripInlineComment(value).trim();
}

function parseQuotedValue(value: string, quote: '"' | "'"): string {
  let escaped = false;
  for (let index = 1; index < value.length; index += 1) {
    const char = value[index]!;
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === "\\") {
      escaped = true;
      continue;
    }
    if (char === quote) {
      return value.slice(1, index);
    }
  }
  return value.slice(1);
}

function stripInlineComment(value: string): string {
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === "#" && (index === 0 || /\s/.test(value[index - 1]!))) {
      return value.slice(0, index);
    }
  }
  return value;
}
