import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignsAddNegativewordRequest, CampaignsAddNegativewordResponseData, CampaignsAddRequest, CampaignsAddResponseData, CampaignsDeleteRequest, CampaignsDeleteResponseData, CampaignsGetNegativewordRequest, CampaignsGetNegativewordResponseData, CampaignsGetResponseData, CampaignsUpdateConfiguredStatusRequest, CampaignsUpdateConfiguredStatusResponseData, CampaignsUpdateDailyBudgetRequest, CampaignsUpdateDailyBudgetResponseData, CampaignsUpdateNegativewordRequest, CampaignsUpdateNegativewordResponseData, CampaignsUpdateRequest, CampaignsUpdateResponseData } from "../models";
export interface CampaignsApiAddRequest {
    data: CampaignsAddRequest;
}
export interface CampaignsApiAddNegativewordRequest {
    data: CampaignsAddNegativewordRequest;
}
export interface CampaignsApiDeleteRequest {
    data: CampaignsDeleteRequest;
}
export interface CampaignsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    isDeleted?: boolean;
    weixinOfficialAccountsUpgradeEnabled?: boolean;
    fields?: unknown;
}
export interface CampaignsApiGetNegativewordRequest {
    data: CampaignsGetNegativewordRequest;
}
export interface CampaignsApiUpdateRequest {
    data: CampaignsUpdateRequest;
}
export interface CampaignsApiUpdateConfiguredStatusRequest {
    data: CampaignsUpdateConfiguredStatusRequest;
}
export interface CampaignsApiUpdateDailyBudgetRequest {
    data: CampaignsUpdateDailyBudgetRequest;
}
export interface CampaignsApiUpdateNegativewordRequest {
    data: CampaignsUpdateNegativewordRequest;
}
export declare class CampaignsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: CampaignsApiAddRequest): Promise<CampaignsAddResponseData>;
    addWithHttpInfo(request: CampaignsApiAddRequest): Promise<ApiResponse<CampaignsAddResponseData>>;
    addNegativeword(request: CampaignsApiAddNegativewordRequest): Promise<CampaignsAddNegativewordResponseData>;
    addNegativewordWithHttpInfo(request: CampaignsApiAddNegativewordRequest): Promise<ApiResponse<CampaignsAddNegativewordResponseData>>;
    delete(request: CampaignsApiDeleteRequest): Promise<CampaignsDeleteResponseData>;
    deleteWithHttpInfo(request: CampaignsApiDeleteRequest): Promise<ApiResponse<CampaignsDeleteResponseData>>;
    get(request: CampaignsApiGetRequest): Promise<CampaignsGetResponseData>;
    getWithHttpInfo(request: CampaignsApiGetRequest): Promise<ApiResponse<CampaignsGetResponseData>>;
    getNegativeword(request: CampaignsApiGetNegativewordRequest): Promise<CampaignsGetNegativewordResponseData>;
    getNegativewordWithHttpInfo(request: CampaignsApiGetNegativewordRequest): Promise<ApiResponse<CampaignsGetNegativewordResponseData>>;
    update(request: CampaignsApiUpdateRequest): Promise<CampaignsUpdateResponseData>;
    updateWithHttpInfo(request: CampaignsApiUpdateRequest): Promise<ApiResponse<CampaignsUpdateResponseData>>;
    updateConfiguredStatus(request: CampaignsApiUpdateConfiguredStatusRequest): Promise<CampaignsUpdateConfiguredStatusResponseData>;
    updateConfiguredStatusWithHttpInfo(request: CampaignsApiUpdateConfiguredStatusRequest): Promise<ApiResponse<CampaignsUpdateConfiguredStatusResponseData>>;
    updateDailyBudget(request: CampaignsApiUpdateDailyBudgetRequest): Promise<CampaignsUpdateDailyBudgetResponseData>;
    updateDailyBudgetWithHttpInfo(request: CampaignsApiUpdateDailyBudgetRequest): Promise<ApiResponse<CampaignsUpdateDailyBudgetResponseData>>;
    updateNegativeword(request: CampaignsApiUpdateNegativewordRequest): Promise<CampaignsUpdateNegativewordResponseData>;
    updateNegativewordWithHttpInfo(request: CampaignsApiUpdateNegativewordRequest): Promise<ApiResponse<CampaignsUpdateNegativewordResponseData>>;
}
