// Ported from github.com/bububa/kwai-marketing-api/model/types.go

import JSONbig from "json-bigint";

const JSONBig = JSONbig({ storeAsString: true });

export type KuaishouId = number | string;

export interface PageInfo {
  page_size?: number;
  current_page?: number;
  total_count?: number;
}

export const MatchType = {
  Exact: 1,
  Phrase: 2,
  Broad: 3,
} as const;

export type MatchType = (typeof MatchType)[keyof typeof MatchType];

export function parseMatchType(value: unknown): MatchType | undefined {
  if (value == null || value === "") {
    return undefined;
  }
  if (typeof value === "number") {
    return value as MatchType;
  }
  const text = String(value);
  if (text === "精确匹配") {
    return MatchType.Exact;
  }
  if (text === "短语匹配") {
    return MatchType.Phrase;
  }
  if (text === "广泛匹配") {
    return MatchType.Broad;
  }
  const parsed = Number(text);
  return Number.isFinite(parsed) ? (parsed as MatchType) : undefined;
}

export function jsonMarshal(value: unknown): Uint8Array {
  return new TextEncoder().encode(JSONBig.stringify(toPlainJson(value)));
}

export function jsonUnmarshal<T>(value: string | Uint8Array): T {
  const text = typeof value === "string" ? value : new TextDecoder().decode(value);
  return JSONBig.parse(text) as T;
}

export function encodeQuery(params: Record<string, string | undefined | null>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === "") {
      continue;
    }
    search.set(key, value);
  }
  return search.toString();
}

export function toPlainJson(value: unknown): unknown {
  if (value == null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => toPlainJson(item));
  }
  if (value instanceof Uint8Array || value instanceof ArrayBuffer || value instanceof Blob) {
    return undefined;
  }
  const result: Record<string, unknown> = {};
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (typeof item === "function" || item === undefined) {
      continue;
    }
    result[key] = toPlainJson(item);
  }
  return result;
}
