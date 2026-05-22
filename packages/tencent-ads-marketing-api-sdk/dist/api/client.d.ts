export declare const SDK_VERSION = "1.7.84";
export declare class ApiClient {
    private basePath;
    private readonly fetchImpl;
    private accessToken?;
    readonly defaultHeaders: Headers;
    constructor(options?: {
        fetch?: FetchLike;
        basePath?: string;
    });
    getBasePath(): string;
    setBasePath(basePath: string): this;
    setUserAgent(userAgent: string): this;
    addDefaultHeader(name: string, value: string): this;
    setAccessToken(token: string): this;
    buildUrl(path: string, queryParams?: QueryParam[], basePathOverride?: string): URL;
    request<T = unknown>(options: RequestOptions): Promise<T>;
    requestWithHttpInfo<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>>;
    private buildRequest;
    private buildMultipartFormBody;
    private readResponseBody;
    private unwrapResponseData;
    private parameterToString;
    private applyAuthQueryParams;
}
export declare class ApiException extends Error {
    readonly statusCode?: number;
    readonly responseBody?: unknown;
    readonly headers?: Headers;
    constructor(message: string, options?: {
        statusCode?: number;
        responseBody?: unknown;
        headers?: Headers;
    });
}
export interface ApiResponse<T> {
    data: T;
    statusCode: number;
    headers: Headers;
}
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
export interface QueryParam {
    name: string;
    value: unknown;
    collectionFormat?: "csv" | "multi";
}
export interface RequestOptions {
    method: HttpMethod;
    basePath?: string;
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
export declare function parseJsonPreservingLargeIntegers(text: string): unknown;
