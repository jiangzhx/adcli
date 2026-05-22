import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdgroupsAddNegativewordRequest, AdgroupsAddNegativewordResponseData, AdgroupsAddRequest, AdgroupsAddResponseData, AdgroupsDeleteRequest, AdgroupsDeleteResponseData, AdgroupsGetNegativewordRequest, AdgroupsGetNegativewordResponseData, AdgroupsGetResponseData, AdgroupsUpdateBidAmountRequest, AdgroupsUpdateBidAmountResponseData, AdgroupsUpdateConfiguredStatusRequest, AdgroupsUpdateConfiguredStatusResponseData, AdgroupsUpdateDailyBudgetRequest, AdgroupsUpdateDailyBudgetResponseData, AdgroupsUpdateDatetimeRequest, AdgroupsUpdateDatetimeResponseData, AdgroupsUpdateNegativewordRequest, AdgroupsUpdateNegativewordResponseData, AdgroupsUpdateRequest, AdgroupsUpdateResponseData } from "../models";
export interface AdgroupsApiAddRequest {
    data: AdgroupsAddRequest;
}
export interface AdgroupsApiAddNegativewordRequest {
    data: AdgroupsAddNegativewordRequest;
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
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export interface AdgroupsApiGetNegativewordRequest {
    data: AdgroupsGetNegativewordRequest;
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
export interface AdgroupsApiUpdateNegativewordRequest {
    data: AdgroupsUpdateNegativewordRequest;
}
export declare class AdgroupsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdgroupsApiAddRequest): Promise<AdgroupsAddResponseData>;
    addWithHttpInfo(request: AdgroupsApiAddRequest): Promise<ApiResponse<AdgroupsAddResponseData>>;
    addNegativeword(request: AdgroupsApiAddNegativewordRequest): Promise<AdgroupsAddNegativewordResponseData>;
    addNegativewordWithHttpInfo(request: AdgroupsApiAddNegativewordRequest): Promise<ApiResponse<AdgroupsAddNegativewordResponseData>>;
    delete(request: AdgroupsApiDeleteRequest): Promise<AdgroupsDeleteResponseData>;
    deleteWithHttpInfo(request: AdgroupsApiDeleteRequest): Promise<ApiResponse<AdgroupsDeleteResponseData>>;
    get(request: AdgroupsApiGetRequest): Promise<AdgroupsGetResponseData>;
    getWithHttpInfo(request: AdgroupsApiGetRequest): Promise<ApiResponse<AdgroupsGetResponseData>>;
    getNegativeword(request: AdgroupsApiGetNegativewordRequest): Promise<AdgroupsGetNegativewordResponseData>;
    getNegativewordWithHttpInfo(request: AdgroupsApiGetNegativewordRequest): Promise<ApiResponse<AdgroupsGetNegativewordResponseData>>;
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
    updateNegativeword(request: AdgroupsApiUpdateNegativewordRequest): Promise<AdgroupsUpdateNegativewordResponseData>;
    updateNegativewordWithHttpInfo(request: AdgroupsApiUpdateNegativewordRequest): Promise<ApiResponse<AdgroupsUpdateNegativewordResponseData>>;
}
