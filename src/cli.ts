#!/usr/bin/env bun

import { getSearchIndexCacheInfo, loadSearchIndex, refreshSearchIndex } from "@/src/lib/search/cache";
import { searchDocuments } from "@/src/lib/search/searcher";

type ParsedArgs = {
  domain?: string;
  command?: string;
  query: string[];
  index?: string;
  limit: number;
  json: boolean;
  platform?: string;
  refresh: boolean;
};

const help = `adcli

Usage:
  adcli doc search <query> [--platform tencent_ads] [--limit 10] [--json] [--refresh]
  adcli doc sync

Commands:
  doc search    Search published advertising API docs
  doc sync      Download and cache the latest search index
`;

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }

  if (args.domain === "doc" && args.command === "sync") {
    const index = await refreshSearchIndex();
    const cache = getSearchIndexCacheInfo();
    console.log(`Synced ${index.documents.length} docs to ${cache.cachePath}`);
    return;
  }

  if (args.domain !== "doc" || args.command !== "search") {
    throw new Error(`unknown command: ${[args.domain, args.command].filter(Boolean).join(" ")}`);
  }

  const query = args.query.join(" ").trim();
  if (!query) {
    throw new Error("missing search query");
  }

  const index = await loadSearchIndex({ index: args.index, refresh: args.refresh });
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
    index: process.env.ADCLI_SEARCH_INDEX,
    limit: 10,
    json: false,
    refresh: false,
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

    if (value === "--refresh") {
      args.refresh = true;
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

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
