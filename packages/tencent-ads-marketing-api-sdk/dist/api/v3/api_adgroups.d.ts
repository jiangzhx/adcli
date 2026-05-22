import { ApiClient, type ApiResponse } from "./client";
import type { AdgroupsAddRequest, AdgroupsAddResponseData, AdgroupsDeleteRequest, AdgroupsDeleteResponseData, AdgroupsGetResponseData, AdgroupsUpdateBidAmountRequest, AdgroupsUpdateBidAmountResponseData, AdgroupsUpdateConfiguredStatusRequest, AdgroupsUpdateConfiguredStatusResponseData, AdgroupsUpdateDailyBudgetRequest, AdgroupsUpdateDailyBudgetResponseData, AdgroupsUpdateDatetimeRequest, AdgroupsUpdateDatetimeResponseData, AdgroupsUpdateRequest, AdgroupsUpdateResponseData } from "../../model/v3/index";
export interface AdgroupsApiAddRequest {
    data: AdgroupsAddRequest;
}
export interface AdgroupsApiDeleteRequest {
    data: AdgroupsDeleteRequest;
}
export interface AdgroupsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    fields?: unknown;
    paginationMode?: string;
    cursor?: string;
}
export interface AdgroupsApiUpdateRequest {
    data: AdgroupsUpdateRequest;
}
export interface AdgroupsApiUpdateBidAmountRequest {
    data: AdgroupsUpdateBidAmountRequest;
}
export interface AdgroupsApiUpdateConfiguredStatusRequest {
    data: AdgroupsUpdateConfiguredStatusRequest;
}
export interface AdgroupsApiUpdateDailyBudgetRequest {
    data: AdgroupsUpdateDailyBudgetRequest;
}
export interface AdgroupsApiUpdateDatetimeRequest {
    data: AdgroupsUpdateDatetimeRequest;
}
export declare class AdgroupsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdgroupsApiAddRequest): Promise<AdgroupsAddResponseData>;
    addWithHttpInfo(request: AdgroupsApiAddRequest): Promise<ApiResponse<AdgroupsAddResponseData>>;
    delete(request: AdgroupsApiDeleteRequest): Promise<AdgroupsDeleteResponseData>;
    deleteWithHttpInfo(request: AdgroupsApiDeleteRequest): Promise<ApiResponse<AdgroupsDeleteResponseData>>;
    get(request: AdgroupsApiGetRequest): Promise<AdgroupsGetResponseData>;
    getWithHttpInfo(request: AdgroupsApiGetRequest): Promise<ApiResponse<AdgroupsGetResponseData>>;
    update(request: AdgroupsApiUpdateRequest): Promise<AdgroupsUpdateResponseData>;
    updateWithHttpInfo(request: AdgroupsApiUpdateRequest): Promise<ApiResponse<AdgroupsUpdateResponseData>>;
    updateBidAmount(request: AdgroupsApiUpdateBidAmountRequest): Promise<AdgroupsUpdateBidAmountResponseData>;
    updateBidAmountWithHttpInfo(request: AdgroupsApiUpdateBidAmountRequest): Promise<ApiResponse<AdgroupsUpdateBidAmountResponseData>>;
    updateConfiguredStatus(request: AdgroupsApiUpdateConfiguredStatusRequest): Promise<AdgroupsUpdateConfiguredStatusResponseData>;
    updateConfiguredStatusWithHttpInfo(request: AdgroupsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<AdgroupsUpdateConfiguredStatusResponseData>>;
    updateDailyBudget(request: AdgroupsApiUpdateDailyBudgetRequest): Promise<AdgroupsUpdateDailyBudgetResponseData>;
    updateDailyBudgetWithHttpInfo(request: AdgroupsApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdgroupsUpdateDailyBudgetResponseData>>;
    updateDatetime(request: AdgroupsApiUpdateDatetimeRequest): Promise<AdgroupsUpdateDatetimeResponseData>;
    updateDatetimeWithHttpInfo(request: AdgroupsApiUpdateDatetimeRequest): Promise<ApiResponse<AdgroupsUpdateDatetimeResponseData>>;
}
