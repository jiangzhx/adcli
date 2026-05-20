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
  adcli list [platform] [--json]
  adcli doc <command>
  adcli prompt
  adcli llms

Commands:
  list          List supported advertising platforms and capabilities
  doc           Search and sync published advertising API docs
  prompt        Print an AI/Agent instruction prompt for using the docs pack
  llms          Print LLM-readable docs pack entry URLs
`;

const docHelp = `adcli doc

Usage:
  adcli doc search <query> [--platform tencent_ads] [--limit 10] [--json] [--refresh]
  adcli doc sync

Commands:
  search    Search published advertising API docs
  sync      Download and cache the latest search index
`;

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  if (!args.domain || args.domain === "help" || args.domain === "--help" || args.domain === "-h") {
    console.log(help.trim());
    return;
  }

  if (args.domain === "list") {
    const index = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index, args);
    return;
  }

  if (args.domain === "doc" && (!args.command || args.command === "--help" || args.command === "-h" || args.command === "help")) {
    console.log(docHelp.trim());
    return;
  }

  if (args.domain === "doc" && args.command === "sync") {
    const index = await refreshSearchIndex();
    const cache = getSearchIndexCacheInfo();
    console.log(`Synced ${index.documents.length} docs to ${cache.cachePath}`);
    return;
  }

  if (args.domain === "doc" && args.command === "list") {
    const index = await loadSearchIndex({ index: args.index, refresh: args.refresh });
    printDocList(index, args);
    return;
  }

  if (args.domain === "prompt") {
    printLlms({ ...args, domain: "llms", command: "prompt" });
    return;
  }

  if (args.domain === "llms") {
    printLlms(args);
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

function printDocList(
  index: Awaited<ReturnType<typeof loadSearchIndex>>,
  args: ParsedArgs,
): void {
  const platformFilter = args.command;
  const platforms = [...new Set(index.documents.map((document) => document.platform))]
    .sort()
    .filter((platform) => !platformFilter || platform === platformFilter)
    .map((platform) => {
      const documents = index.documents.filter((document) => document.platform === platform);

      return {
        platform,
        capabilities: [
          {
            name: "doc",
            documents: documents.length,
            index_url: `https://adcli.jiangzhx.com/${platform}/index.md`,
            commands: [
              `adcli doc search <query> --platform ${platform}`,
            ],
          },
        ],
      };
    });

  if (platformFilter && platforms.length === 0) {
    throw new Error(`unsupported platform: ${platformFilter}`);
  }

  if (args.json) {
    console.log(JSON.stringify({ platforms }, null, 2));
    return;
  }

  for (const item of platforms) {
    console.log(item.platform);
    for (const capability of item.capabilities) {
      console.log(`  ${capability.name}`);
      for (const command of capability.commands) {
        console.log(`    ${command}`);
      }
      console.log(`    docs: ${capability.documents}`);
      console.log(`    index: ${capability.index_url}`);
    }
  }
}

function printLlms(args: ParsedArgs): void {
  const payload = {
    name: "AdCLI Docs Pack",
    base_url: "https://adcli.jiangzhx.com",
    llms_txt: "https://adcli.jiangzhx.com/llms.txt",
    llms_full_txt: "https://adcli.jiangzhx.com/llms-full.txt",
    search_index: "https://adcli.jiangzhx.com/search-index.json",
    platform_indexes: [
      "https://adcli.jiangzhx.com/kuaishou/index.md",
      "https://adcli.jiangzhx.com/oceanengine/index.md",
      "https://adcli.jiangzhx.com/tencent_ads/index.md",
    ],
  };

  if (args.json) {
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (args.command === "prompt") {
    console.log([
      "Use the AdCLI advertising API docs pack when answering advertising platform API questions.",
      "",
      `Start with: ${payload.llms_txt}`,
      `Use full index when needed: ${payload.llms_full_txt}`,
      `Use search index for local/tool search: ${payload.search_index}`,
      "",
      "Rules:",
      "- Prefer the Markdown docs from this docs pack over memory.",
      "- Cite the specific platform document URL or source URL used.",
      "- If a query names a platform, keep that platform as the primary context but do not ignore relevant cross-platform differences.",
      "- For API testing or implementation, identify method, path, auth requirement, parameters, response fields, and known limits.",
      "- If the docs are incomplete or ambiguous, say what is missing instead of guessing.",
    ].join("\n"));
    return;
  }

  console.log([
    "AdCLI Docs Pack",
    "",
    `llms.txt:       ${payload.llms_txt}`,
    `llms-full.txt:  ${payload.llms_full_txt}`,
    `search index:   ${payload.search_index}`,
    "",
    "Platform indexes:",
    ...payload.platform_indexes.map((url) => `- ${url}`),
    "",
    "Prompt for AI/Agent:",
    "  adcli llms prompt",
  ].join("\n"));
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
