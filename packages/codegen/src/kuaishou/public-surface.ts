export interface KuaishouPublicNamespace {
  exportName: string;
  path: string;
}

export const KUAISHOU_PUBLIC_NAMESPACES: readonly KuaishouPublicNamespace[] = [
  { exportName: "oauth", path: "oauth" },
  { exportName: "advertiser", path: "advertiser" },
  { exportName: "campaign", path: "dsp/campaign" },
  { exportName: "unit", path: "dsp/unit" },
  { exportName: "report", path: "report" },
  { exportName: "file", path: "file" },
  { exportName: "asyncTask", path: "report/asynctask" },
];

export const KUAISHOU_API_SUCCESS_CODES: Readonly<Record<string, readonly number[]>> = {
  "api/oauth/approval_list.go": [0, 1],
};

export const KUAISHOU_API_FLAT_RESPONSES: Readonly<Record<string, true>> = {
  "api/report/material_report.go": true,
};

export function selectPublicNamespaces(apiFiles: string[]): KuaishouPublicNamespace[] {
  return KUAISHOU_PUBLIC_NAMESPACES.filter((namespace) => apiFiles.some((file) => fileBelongsToNamespace(file, namespace.path)));
}

export function fileBelongsToNamespace(relativeApiFile: string, namespacePath: string) {
  const rel = relativeApiFile.replace(/^api\//, "").replace(/\.go$/, "");
  const dir = rel.includes("/") ? rel.slice(0, rel.lastIndexOf("/")) : ".";
  return dir === namespacePath || dir.startsWith(`${namespacePath}/`);
}

export function publicPackageExports(namespaces: readonly KuaishouPublicNamespace[] = KUAISHOU_PUBLIC_NAMESPACES) {
  const exports: Record<string, { types: string; import: string }> = {
    ".": { types: "./dist/index.d.ts", import: "./dist/index.js" },
    "./core": { types: "./dist/core/index.d.ts", import: "./dist/core/index.js" },
    "./model": { types: "./dist/model/index.d.ts", import: "./dist/model/index.js" },
  };
  for (const namespace of namespaces) {
    exports[`./api/${namespace.path}`] = {
      types: `./dist/api/${namespace.path}/index.d.ts`,
      import: `./dist/api/${namespace.path}/index.js`,
    };
  }
  return exports;
}

export function emitPublicIndex(namespaces: readonly KuaishouPublicNamespace[], modelDirs: readonly string[]) {
  const runtime = `export { NewSDKClient, SDKClient, ACTIVATE_URL, BASE_URL, OAUTH_URL, SOURCE_VERSION } from "./core/index";
export type { FetchLike, SDKClientOptions } from "./core/index";
export { BaseResponse, MatchType, TemporalGranularityType, encodeQuery, jsonMarshal, jsonUnmarshal, parseMatchType } from "./model/index";
export type { GetRequest, KuaishouId, PageInfo, PostRequest, Response, UploadField, UploadRequest } from "./model/index";`;
  const apiExports = namespaces.map((namespace) => `export * as ${namespace.exportName} from "./api/${namespace.path}/index";`);
  const modelExports = namespaces
    .filter((namespace) => modelDirs.some((dir) => dir === namespace.path || dir.startsWith(`${namespace.path}/`)))
    .map((namespace) => `export * as ${namespace.exportName}Model from "./model/${namespace.path}/index";`);
  return `// Generated from github.com/bububa/kwai-marketing-api public surface
// Do not edit manually.

${runtime}
${apiExports.join("\n")}
${modelExports.join("\n")}
`;
}
