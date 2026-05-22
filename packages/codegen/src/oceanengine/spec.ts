export interface ApiParamSpec {
  javaType: string;
  name: string;
  required: boolean;
}

export interface ApiQueryParamSpec {
  name: string;
  source: string;
  collectionFormat?: "csv" | "multi";
}

export interface ApiSpec {
  className: string;
  methodName: string;
  httpMethod: string;
  path: string;
  responseType: string;
  params: ApiParamSpec[];
  queryParams: ApiQueryParamSpec[];
  formParams: ApiQueryParamSpec[];
  fileParams: ApiQueryParamSpec[];
  authNames: string[];
  accepts: string[];
  contentTypes: string[];
  bodyParam?: string;
}

export type ModelSpec =
  | {
      kind: "interface";
      name: string;
      fields: Array<{ jsonName: string; javaName: string; javaType: string; required: boolean }>;
    }
  | {
      kind: "abstractSchema";
      name: "AbstractOpenApiSchema";
    }
  | {
      kind: "enum";
      name: string;
      values: Array<{ key: string; value: string | number }>;
    };
