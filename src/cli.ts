#!/usr/bin/env bun

import { readFile } from "node:fs/promises";
import path from "node:path";

import { searchDocuments } from "@/src/lib/search/searcher";
import type { SearchIndex } from "@/src/lib/search/types";

type ParsedArgs = {
  domain?: string;
  command?: string;
  query: string[];
  index: string;
  limit: number;
  json: boolean;
  platform?: string;
};

const defaultSearchIndexUrl = "https://adcli.jiangzhx.com/search-index.json";

const help = `adcli

Usage:
  adcli doc search <query> [--index ${defaultSearchIndexUrl}] [--platform tencent_ads] [--limit 10] [--json]

Commands:
  doc search    Search published advertising API docs
`;

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }

  if (args.domain !== "doc" || args.command !== "search") {
    throw new Error(`unknown command: ${[args.domain, args.command].filter(Boolean).join(" ")}`);
  }

  const query = args.query.join(" ").trim();
  if (!query) {
    throw new Error("missing search query");
  }

  const index = await loadSearchIndex(args.index);
  const results = await searchDocuments({
    query,
    documents: index.documents,
    miniSearch: index.mini_search,
    platformAliases: index.platform_aliases,
    platform: args.platform,
    limit: args.limit,
  });

  if (args.json) {
    console.log(JSON.stringify({ query, results }, null, 2));
    return;
  }

  if (results.length === 0) {
    console.log("No matching docs found.");
    return;
  }

  for (const [index, result] of results.entries()) {
    console.log(`${index + 1}. [${result.platform}] ${result.title}`);
    console.log(`   Doc: ${result.public_path}`);
    if (result.source_url) {
      console.log(`   Source: ${result.source_url}`);
    }
    console.log(`   Score: ${result.score.toFixed(2)}`);
  }
}

function parseArgs(argv: string[]): ParsedArgs {
  const args: ParsedArgs = {
    domain: argv[0],
    command: argv[1],
    query: [],
    index: process.env.ADCLI_SEARCH_INDEX ?? defaultSearchIndexUrl,
    limit: 10,
    json: false,
  };

  for (let index = 2; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === "--json") {
      args.json = true;
      continue;
    }

    if (value === "--index") {
      args.index = argv[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (value === "--limit") {
      args.limit = Number.parseInt(argv[index + 1] ?? "", 10);
      index += 1;
      continue;
    }

    if (value === "--platform") {
      args.platform = argv[index + 1];
      index += 1;
      continue;
    }

    args.query.push(value ?? "");
  }

  if (!Number.isInteger(args.limit) || args.limit < 1) {
    throw new Error("--limit must be a positive integer");
  }

  return args;
}

async function loadSearchIndex(index: string): Promise<SearchIndex> {
  if (/^https?:\/\//i.test(index)) {
    const response = await fetch(index);
    if (!response.ok) {
      throw new Error(`failed to fetch search index: ${index} (${response.status})`);
    }

    return await response.json() as SearchIndex;
  }

  const indexPath = path.resolve(index);

  try {
    return JSON.parse(await readFile(indexPath, "utf8")) as SearchIndex;
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      throw new Error(`missing search index: ${path.relative(process.cwd(), indexPath)}. Use --index ${defaultSearchIndexUrl} or run: bun run build:search-index`);
    }

    throw error;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
