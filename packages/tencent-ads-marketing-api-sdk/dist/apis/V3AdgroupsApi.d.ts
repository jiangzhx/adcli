import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupsAddRequest, AdgroupsAddResponseData, AdgroupsDeleteRequest, AdgroupsDeleteResponseData, AdgroupsGetResponseData, AdgroupsUpdateBidAmountRequest, AdgroupsUpdateBidAmountResponseData, AdgroupsUpdateConfiguredStatusRequest, AdgroupsUpdateConfiguredStatusResponseData, AdgroupsUpdateDailyBudgetRequest, AdgroupsUpdateDailyBudgetResponseData, AdgroupsUpdateDatetimeRequest, AdgroupsUpdateDatetimeResponseData, AdgroupsUpdateRequest, AdgroupsUpdateResponseData } from "../models";
export interface V3AdgroupsApiAddRequest {
    data: AdgroupsAddRequest;
}
export interface V3AdgroupsApiDeleteRequest {
    data: AdgroupsDeleteRequest;
}
export interface V3AdgroupsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
    paginationMode?: string;
    cursor?: string;
}
export interface V3AdgroupsApiUpdateRequest {
    data: AdgroupsUpdateRequest;
}
export interface V3AdgroupsApiUpdateBidAmountRequest {
    data: AdgroupsUpdateBidAmountRequest;
}
export interface V3AdgroupsApiUpdateConfiguredStatusRequest {
    data: AdgroupsUpdateConfiguredStatusRequest;
}
export interface V3AdgroupsApiUpdateDailyBudgetRequest {
    data: AdgroupsUpdateDailyBudgetRequest;
}
export interface V3AdgroupsApiUpdateDatetimeRequest {
    data: AdgroupsUpdateDatetimeRequest;
}
export declare class V3AdgroupsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AdgroupsApiAddRequest): Promise<AdgroupsAddResponseData>;
    addWithHttpInfo(request: V3AdgroupsApiAddRequest): Promise<ApiResponse<AdgroupsAddResponseData>>;
    delete(request: V3AdgroupsApiDeleteRequest): Promise<AdgroupsDeleteResponseData>;
    deleteWithHttpInfo(request: V3AdgroupsApiDeleteRequest): Promise<ApiResponse<AdgroupsDeleteResponseData>>;
    get(request: V3AdgroupsApiGetRequest): Promise<AdgroupsGetResponseData>;
    getWithHttpInfo(request: V3AdgroupsApiGetRequest): Promise<ApiResponse<AdgroupsGetResponseData>>;
    update(request: V3AdgroupsApiUpdateRequest): Promise<AdgroupsUpdateResponseData>;
    updateWithHttpInfo(request: V3AdgroupsApiUpdateRequest): Promise<ApiResponse<AdgroupsUpdateResponseData>>;
    updateBidAmount(request: V3AdgroupsApiUpdateBidAmountRequest): Promise<AdgroupsUpdateBidAmountResponseData>;
    updateBidAmountWithHttpInfo(request: V3AdgroupsApiUpdateBidAmountRequest): Promise<ApiResponse<AdgroupsUpdateBidAmountResponseData>>;
    updateConfiguredStatus(request: V3AdgroupsApiUpdateConfiguredStatusRequest): Promise<AdgroupsUpdateConfiguredStatusResponseData>;
    updateConfiguredStatusWithHttpInfo(request: V3AdgroupsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdgroupsUpdateConfiguredStatusResponseData>>;
    updateDailyBudget(request: V3AdgroupsApiUpdateDailyBudgetRequest): Promise<AdgroupsUpdateDailyBudgetResponseData>;
    updateDailyBudgetWithHttpInfo(request: V3AdgroupsApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdgroupsUpdateDailyBudgetResponseData>>;
    updateDatetime(request: V3AdgroupsApiUpdateDatetimeRequest): Promise<AdgroupsUpdateDatetimeResponseData>;
    updateDatetimeWithHttpInfo(request: V3AdgroupsApiUpdateDatetimeRequest): Promise<ApiResponse<AdgroupsUpdateDatetimeResponseData>>;
}
