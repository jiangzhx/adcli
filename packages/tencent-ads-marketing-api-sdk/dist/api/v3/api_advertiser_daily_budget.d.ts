import { ApiClient, type ApiResponse } from "./client";
import type { AdvertiserDailyBudgetGetResponseData, AdvertiserDailyBudgetUpdateRequest, AdvertiserDailyBudgetUpdateResponseData } from "../../model/v3/index";
export interface AdvertiserDailyBudgetApiGetRequest {
    accountId: number | string;
    fields: string[];
}
export interface AdvertiserDailyBudgetApiUpdateRequest {
    data: AdvertiserDailyBudgetUpdateRequest;
}
export declare class AdvertiserDailyBudgetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdvertiserDailyBudgetApiGetRequest): Promise<AdvertiserDailyBudgetGetResponseData>;
    getWithHttpInfo(request: AdvertiserDailyBudgetApiGetRequest): Promise<ApiResponse<AdvertiserDailyBudgetGetResponseData>>;
    update(request: AdvertiserDailyBudgetApiUpdateRequest): Promise<AdvertiserDailyBudgetUpdateResponseData>;
    updateWithHttpInfo(request: AdvertiserDailyBudgetApiUpdateRequest): Promise<ApiResponse<AdvertiserDailyBudgetUpdateResponseData>>;
}
