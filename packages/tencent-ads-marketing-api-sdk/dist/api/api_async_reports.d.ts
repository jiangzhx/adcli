import { ApiClient, type ApiResponse } from "./client";
import type { AsyncReportsAddRequest, AsyncReportsAddResponseData, AsyncReportsGetResponseData } from "../model/index";
export interface AsyncReportsApiAddRequest {
    data: AsyncReportsAddRequest;
}
export interface AsyncReportsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export declare class AsyncReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AsyncReportsApiAddRequest): Promise<AsyncReportsAddResponseData>;
    addWithHttpInfo(request: AsyncReportsApiAddRequest): Promise<ApiResponse<AsyncReportsAddResponseData>>;
    get(request: AsyncReportsApiGetRequest): Promise<AsyncReportsGetResponseData>;
    getWithHttpInfo(request: AsyncReportsApiGetRequest): Promise<ApiResponse<AsyncReportsGetResponseData>>;
}
