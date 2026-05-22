export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export interface QueryParam {
    name: string;
    value: unknown;
    collectionFormat?: "csv" | "multi";
}
export interface RequestOptions {
    method: HttpMethod;
    path: string;
    queryParams?: QueryParam[];
    headers?: Record<string, string>;
    body?: unknown;
    formParams?: Record<string, unknown>;
    files?: Record<string, Blob | undefined | null>;
    contentType?: string;
    responseType?: "json" | "text" | "arrayBuffer";
}
export type FetchLike = (input: Request, init?: RequestInit) => Promise<Response>;
