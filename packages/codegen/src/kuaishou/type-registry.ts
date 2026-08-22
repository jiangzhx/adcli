import { dirname, relative } from "node:path";

import type { KuaishouModelFileSpec } from "./spec";

export type KuaishouTypeRegistry = Map<string, string[]>;

const BUILTIN_TYPES = new Set(["KuaishouId", "PageInfo", "Record", "Uint8Array"]);

export function buildTypeRegistry(modelSpecs: KuaishouModelFileSpec[]): KuaishouTypeRegistry {
  const registry: KuaishouTypeRegistry = new Map();
  for (const spec of modelSpecs) {
    const names = [...spec.structs.map((model) => model.name), ...(spec.enums ?? []).map((item) => item.name)];
    for (const name of names) {
      registry.set(name, [...(registry.get(name) ?? []), spec.relativePath]);
    }
  }
  return registry;
}

export function resolveTypeImport(typeName: string, fromRelativePath: string, registry: KuaishouTypeRegistry): string | undefined {
  if (BUILTIN_TYPES.has(typeName)) {
    return undefined;
  }
  const candidates = registry.get(typeName) ?? [];
  const target = pickTypeLocation(candidates, fromRelativePath);
  if (!target || target === fromRelativePath) {
    return undefined;
  }
  return relativeTypeImport(fromRelativePath, target);
}

export function collectReferencedTypes(tsType: string): string[] {
  return tsType.match(/\b[A-Z][A-Za-z0-9]*\b/g) ?? [];
}

function pickTypeLocation(candidates: string[], fromRelativePath: string): string | undefined {
  if (candidates.length === 0) {
    return undefined;
  }
  const fromDir = dirname(fromRelativePath);
  const sameDir = candidates.filter((path) => dirname(path) === fromDir);
  if (sameDir.length > 0) {
    return sameDir[0];
  }
  return [...candidates].sort((left, right) => {
    const leftDistance = relative(fromDir, dirname(left)).split("/").length;
    const rightDistance = relative(fromDir, dirname(right)).split("/").length;
    return leftDistance - rightDistance || left.localeCompare(right);
  })[0];
}

function relativeTypeImport(fromRelativePath: string, toRelativePath: string): string {
  const specifier = relative(dirname(fromRelativePath), toRelativePath.replace(/\.go$/, "")).replaceAll("\\", "/");
  return specifier.startsWith(".") ? specifier : `./${specifier}`;
}
