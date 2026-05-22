import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAddRequest, AdvertiserAddResponseData, AdvertiserGetResponseData, AdvertiserUpdateDailyBudgetRequest, AdvertiserUpdateDailyBudgetResponseData, AdvertiserUpdateRequest, AdvertiserUpdateResponseData } from "../models";
export interface V3AdvertiserApiAddRequest {
    data: AdvertiserAddRequest;
}
export interface V3AdvertiserApiGetRequest {
    fields: string[];
    paginationMode: string;
    pageSize: number;
    agencyId?: number | string;
    accountId?: number | string;
    filtering?: unknown;
    page?: number;
    cursor?: number;
}
export interface V3AdvertiserApiUpdateRequest {
    data: AdvertiserUpdateRequest;
}
export interface V3AdvertiserApiUpdateDailyBudgetRequest {
    data: AdvertiserUpdateDailyBudgetRequest;
}
export declare class V3AdvertiserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3AdvertiserApiAddRequest): Promise<AdvertiserAddResponseData>;
    addWithHttpInfo(request: V3AdvertiserApiAddRequest): Promise<ApiResponse<AdvertiserAddResponseData>>;
    get(request: V3AdvertiserApiGetRequest): Promise<AdvertiserGetResponseData>;
    getWithHttpInfo(request: V3AdvertiserApiGetRequest): Promise<ApiResponse<AdvertiserGetResponseData>>;
    update(request: V3AdvertiserApiUpdateRequest): Promise<AdvertiserUpdateResponseData>;
    updateWithHttpInfo(request: V3AdvertiserApiUpdateRequest): Promise<ApiResponse<AdvertiserUpdateResponseData>>;
    updateDailyBudget(request: V3AdvertiserApiUpdateDailyBudgetRequest): Promise<AdvertiserUpdateDailyBudgetResponseData>;
    updateDailyBudgetWithHttpInfo(request: V3AdvertiserApiUpdateDailyBudgetRequest): Promise<ApiResponse<AdvertiserUpdateDailyBudgetResponseData>>;
}
