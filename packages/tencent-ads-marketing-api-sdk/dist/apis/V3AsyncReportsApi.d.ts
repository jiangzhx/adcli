import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AsyncReportsAddRequest, AsyncReportsAddResponseData, AsyncReportsGetResponseData } from "../models";
export interface V3AsyncReportsApiAddRequest {
    data: AsyncReportsAddRequest;
}
export interface V3AsyncReportsApiGetRequest {
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    organizationId?: number | string;
    fields?: unknown;
}
export declare class V3AsyncReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AsyncReportsApiAddRequest): Promise<AsyncReportsAddResponseData>;
    addWithHttpInfo(request: V3AsyncReportsApiAddRequest): Promise<ApiResponse<AsyncReportsAddResponseData>>;
    get(request: V3AsyncReportsApiGetRequest): Promise<AsyncReportsGetResponseData>;
    getWithHttpInfo(request: V3AsyncReportsApiGetRequest): Promise<ApiResponse<AsyncReportsGetResponseData>>;
}
