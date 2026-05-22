import { SDK_VERSION } from "./sdk-version";
import type { ApiResponse } from "./ApiResponse";
import type { FetchLike, QueryParam, RequestOptions } from "./types";
export { SDK_VERSION };
export declare class ApiClient {
    private basePath;
    private readonly fetchImpl;
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
    buildUrl(path: string, queryParams?: QueryParam[]): URL;
    request<T = unknown>(options: RequestOptions): Promise<T>;
    requestWithHttpInfo<T = unknown>(options: RequestOptions): Promise<ApiResponse<T>>;
    private buildRequest;
    private buildMultipartFormBody;
    private readResponseBody;
    private parameterToString;
}
