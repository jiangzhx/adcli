import type { SourceRecipe } from "./recipe";

export type IngestUrlArgs = {
  url: string;
  platform?: string;
};

export type IngestUrlSummary = {
  sourceId: string;
  sourceUrl: string;
  title: string;
  blockCount: number;
  cleanedLength: number;
  targetDir: string;
};

export function parseIngestUrlArgs(argv: string[]): IngestUrlArgs {
  const positionals: string[] = [];
  let platform: string | undefined;

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    if (!value) {
      continue;
    }

    if (value === "--title") {
      throw new Error("--title is not supported; the title must be extracted from the source page");
    }

    if (value === "--platform") {
      const next = argv[index + 1];
      if (!next || next.startsWith("--")) {
        throw new Error("--platform must be followed by a platform id");
      }
      platform = next;
      index += 1;
      continue;
    }

    if (value.startsWith("--")) {
      throw new Error(`unknown option: ${value}`);
    }

    positionals.push(value);
  }

  if (positionals.length !== 1) {
    throw new Error("Usage: bun run ingest:url <url> [--platform oceanengine]");
  }

  return {
    url: positionals[0] as string,
    platform,
  };
}

export function buildSourceRecipeFromUrl(args: IngestUrlArgs): SourceRecipe {
  const parsed = parseHttpUrl(args.url);
  const inferred = inferSourceFromUrl(parsed);

  if (!inferred) {
    throw new Error(`unsupported source URL: ${args.url}`);
  }

  if (args.platform && args.platform !== inferred.platform) {
    throw new Error(`--platform ${args.platform} does not match inferred platform ${inferred.platform}`);
  }

  return {
    id: inferred.sourceId,
    platform: inferred.platform,
    type: "web",
    url: stripHash(parsed).toString(),
    capture: {
      mode: "playwright",
      wait_for: "body",
    },
  };
}

export function formatIngestUrlSummary(summary: IngestUrlSummary): string {
  return [
    `Ingested ${summary.sourceId}`,
    `Title: ${summary.title}`,
    `Blocks: ${summary.blockCount}`,
    `Cleaned chars: ${summary.cleanedLength}`,
    `Output: ${summary.targetDir}`,
    "",
    `Next: bun run build:llms --url ${summary.sourceUrl}`,
  ].join("\n");
}

function inferSourceFromUrl(url: URL): { platform: string; sourceId: string } | undefined {
  if (url.hostname !== "open.oceanengine.com") {
    return undefined;
  }

  const match = url.pathname.match(/^\/labels\/\d+\/docs\/(\d+)\/?$/);
  if (!match?.[1]) {
    return undefined;
  }

  return {
    platform: "oceanengine",
    sourceId: `oceanengine_${match[1]}`,
  };
}

function parseHttpUrl(value: string): URL {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`invalid URL: ${value}`);
  }

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("url must use http or https");
  }

  return parsed;
}

function stripHash(url: URL): URL {
  const next = new URL(url.toString());
  next.hash = "";
  return next;
}
