import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDailyBudgetGetResponseData } from "../models";
export interface AdvertiserDailyBudgetApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class AdvertiserDailyBudgetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdvertiserDailyBudgetApiGetRequest): Promise<AdvertiserDailyBudgetGetResponseData>;
    getWithHttpInfo(request: AdvertiserDailyBudgetApiGetRequest): Promise<ApiResponse<AdvertiserDailyBudgetGetResponseData>>;
}
