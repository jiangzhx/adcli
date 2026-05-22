import { ApiClient } from "./ApiClient";
import type { ApiResponse } from "./ApiResponse";
import type { HttpMethod } from "./types";
export declare class CommonReqApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    commonReq<T = unknown>(path: string, method: HttpMethod, options?: {
        queryParams?: Record<string, unknown>;
        body?: unknown;
        formParams?: Record<string, unknown>;
        files?: Record<string, Blob | undefined | null>;
        contentType?: string;
    }): Promise<T>;
    commonReqWithHttpInfo<T = unknown>(path: string, method: HttpMethod, options?: {
        queryParams?: Record<string, unknown>;
        body?: unknown;
        formParams?: Record<string, unknown>;
        files?: Record<string, Blob | undefined | null>;
        contentType?: string;
    }): Promise<ApiResponse<T>>;
}
