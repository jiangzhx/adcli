import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAddRequest, AdvertiserAddResponseData, AdvertiserGetResponseData, AdvertiserUpdateDailyBudgetRequest, AdvertiserUpdateDailyBudgetResponseData, AdvertiserUpdateRequest, AdvertiserUpdateResponseData } from "../models";
export interface AdvertiserApiAddRequest {
    data: AdvertiserAddRequest;
}
export interface AdvertiserApiGetRequest {
    agencyId?: number | string;
    accountId?: number | string;
    filtering?: unknown;
    fields?: unknown;
    paginationMode?: string;
    page?: number;
    pageSize?: number;
    cursor?: number;
}
export interface AdvertiserApiUpdateRequest {
    data: AdvertiserUpdateRequest;
}
export interface AdvertiserApiUpdateDailyBudgetRequest {
    data: AdvertiserUpdateDailyBudgetRequest;
}
export declare class AdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AdvertiserApiAddRequest): Promise<AdvertiserAddResponseData>;
    addWithHttpInfo(request: AdvertiserApiAddRequest): Promise<ApiResponse<AdvertiserAddResponseData>>;
    get(request: AdvertiserApiGetRequest): Promise<AdvertiserGetResponseData>;
    getWithHttpInfo(request: AdvertiserApiGetRequest): Promise<ApiResponse<AdvertiserGetResponseData>>;
    update(request: AdvertiserApiUpdateRequest): Promise<AdvertiserUpdateResponseData>;
    updateWithHttpInfo(request: AdvertiserApiUpdateRequest): Promise<ApiResponse<AdvertiserUpdateResponseData>>;
    updateDailyBudget(request: AdvertiserApiUpdateDailyBudgetRequest): Promise<AdvertiserUpdateDailyBudgetResponseData>;
    updateDailyBudgetWithHttpInfo(request: AdvertiserApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdvertiserUpdateDailyBudgetResponseData>>;
}
