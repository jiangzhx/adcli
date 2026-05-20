import MiniSearch, { type SearchResult } from "minisearch";

import type { PlatformAliases } from "./platforms";
import { tokenize } from "./tokenize";
import type { SearchIndexDocument, SearchResultDocument } from "./types";

type SearchDocumentsInput = {
  query: string;
  documents: SearchIndexDocument[];
  miniSearch?: unknown;
  platformAliases?: PlatformAliases;
  platform?: string;
  limit?: number;
};

type MiniSearchDocument = SearchIndexDocument & {
  headings_text: string;
  platform_text: string;
};

export function createMiniSearch(): MiniSearch<MiniSearchDocument> {
  return new MiniSearch<MiniSearchDocument>({
    fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
    searchOptions: {
      boost: {
        title: 8,
        platform_text: 6,
        headings_text: 5,
        id: 3,
        public_path: 2,
        source_url: 1,
      },
      prefix: true,
    },
    tokenize,
  });
}

export function toMiniSearchDocuments(
  documents: SearchIndexDocument[],
  platformAliases: PlatformAliases = {},
): MiniSearchDocument[] {
  return documents.map((document) => ({
    ...document,
    headings_text: document.headings.join("\n"),
    platform_text: [document.platform, ...(platformAliases[document.platform] ?? [])].join(" "),
  }));
}

export async function searchDocuments(input: SearchDocumentsInput): Promise<SearchResultDocument[]> {
  const query = input.query.trim();

  if (!query) {
    return [];
  }

  const platformAliases = input.platformAliases ?? {};
  const documents = input.platform
    ? input.documents.filter((document) => document.platform === input.platform)
    : input.documents;
  const documentsById = new Map(documents.map((document) => [document.id, document]));
  const minisearch = input.miniSearch
    ? MiniSearch.loadJSON(JSON.stringify(input.miniSearch), {
      fields: ["title", "platform_text", "headings_text", "id", "public_path", "source_url"],
      searchOptions: {
        boost: {
          title: 8,
          platform_text: 6,
          headings_text: 5,
          id: 3,
          public_path: 2,
          source_url: 1,
        },
        prefix: true,
      },
      tokenize,
    })
    : createMiniSearch();

  if (!input.miniSearch) {
    minisearch.addAll(toMiniSearchDocuments(documents, platformAliases));
  }

  const limit = input.limit ?? 10;
  const candidates = minisearch
    .search(query)
    .slice(0, Math.max(200, limit * 50))
    .map((result) => toSearchResult(result, documentsById, query, platformAliases))
    .filter((result): result is SearchResultDocument => result !== null);

  const seen = new Set(candidates.map((result) => result.id));
  for (const document of documents) {
    const score = rankDocument(query, document, platformAliases);
    if (score > 0 && !seen.has(document.id)) {
      candidates.push({ ...document, score, terms: tokenize(query) });
      seen.add(document.id);
    }
  }

  return candidates
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

function toSearchResult(
  result: SearchResult,
  documentsById: Map<string, SearchIndexDocument>,
  query: string,
  platformAliases: PlatformAliases,
): SearchResultDocument | null {
  const document = documentsById.get(String(result.id));

  if (!document) {
    return null;
  }

  return {
    ...document,
    score: Math.log1p(result.score) * 30 + rankDocument(query, document, platformAliases),
    terms: result.terms,
  };
}

function rankDocument(
  query: string,
  document: SearchIndexDocument,
  platformAliases: PlatformAliases = {},
): number {
  const terms = Array.from(new Set(tokenize(query).filter((term) => term.length > 1)));
  const compactQuery = compact(query);

  return (
    scoreField(compactQuery, terms, document.title, 3000, 350)
    + scoreField(compactQuery, terms, [document.platform, ...(platformAliases[document.platform] ?? [])].join(" "), 1200, 260)
    + scoreField(compactQuery, terms, document.headings.join(" "), 1500, 220)
    + scoreField(compactQuery, terms, document.public_path, 800, 120)
    + scoreField(compactQuery, terms, document.source_url, 500, 80)
    + scoreField(compactQuery, terms, document.text, 250, 45)
  );
}

function scoreField(
  compactQuery: string,
  terms: string[],
  value: string,
  exactBoost: number,
  termBoost: number,
): number {
  const field = compact(value);
  let score = 0;

  if (compactQuery && field.includes(compactQuery)) {
    score += exactBoost;
  }

  for (const term of terms) {
    score += Math.min(countOccurrences(field, compact(term)), 3) * termBoost * termWeight(term);
  }

  return score;
}

function termWeight(term: string): number {
  if (importantTerms.some((importantTerm) => term.includes(importantTerm))) {
    return 1.5;
  }

  if (genericChineseTerms.has(term) || [...genericChineseTerms].some((genericTerm) => term.includes(genericTerm))) {
    return 0.05;
  }

  return 1;
}

const genericChineseTerms = new Set([
  "广告",
  "数据",
  "接口",
  "文档",
  "获取",
  "查询",
  "创建",
  "更新",
  "删除",
  "投放",
]);

const importantTerms = [
  "消耗",
  "花费",
  "报表",
  "流水",
  "余额",
  "转化",
  "账户",
  "账号",
  "广告主",
  "成本",
  "cost",
  "report",
  "balance",
  "fund",
  "statement",
  "access",
  "token",
];

function countOccurrences(value: string, term: string): number {
  if (!term) {
    return 0;
  }

  let count = 0;
  let index = value.indexOf(term);

  while (index !== -1) {
    count += 1;
    index = value.indexOf(term, index + term.length);
  }

  return count;
}

function compact(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "");
}
