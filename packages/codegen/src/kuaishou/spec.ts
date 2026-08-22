export type KuaishouRequestKind = "post" | "get" | "upload" | "none";
export type KuaishouApiKind = "post" | "get" | "upload" | "getOnBody" | "getBytes" | "url" | "unknown";

export interface KuaishouModelFieldSpec {
  goName: string;
  jsonName: string;
  tsType: string;
}

export interface KuaishouModelStructSpec {
  name: string;
  fields: KuaishouModelFieldSpec[];
  embeddedTypes?: string[];
  requestKind: KuaishouRequestKind;
  url?: string;
}

export interface KuaishouEnumMemberSpec {
  goName: string;
  tsName: string;
  value: string | number;
}

export interface KuaishouEnumSpec {
  name: string;
  kind: "string" | "number";
  members: KuaishouEnumMemberSpec[];
}

export interface KuaishouModelFileSpec {
  packageName: string;
  relativePath: string;
  structs: KuaishouModelStructSpec[];
  enums?: KuaishouEnumSpec[];
}

export interface KuaishouApiParamSpec {
  goName: string;
  tsName: string;
  tsType: string;
  role: "accessToken" | "request" | "scalar";
}

export interface KuaishouApiBuildFieldSpec {
  jsonName: string;
  source: "appId" | "secret" | "param";
  paramName?: string;
}

export interface KuaishouApiSpec {
  functionName: string;
  tsName: string;
  kind: KuaishouApiKind;
  params: KuaishouApiParamSpec[];
  responseType: string;
  unwrap: "object" | "void" | "field" | "string";
  extractField?: string;
  requestType?: string;
  requestInitType?: string;
  buildsRequest?: {
    type: string;
    fields: KuaishouApiBuildFieldSpec[];
  };
  successCodes?: number[];
  flatResponse?: boolean;
}

export interface KuaishouApiFileSpec {
  packageName: string;
  relativePath: string;
  modelImport?: string;
  functions: KuaishouApiSpec[];
}
