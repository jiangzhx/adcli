import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDailyBudgetGetResponseData, AdvertiserDailyBudgetUpdateRequest, AdvertiserDailyBudgetUpdateResponseData } from "../models";
export interface V3AdvertiserDailyBudgetApiGetRequest {
    accountId: number | string;
    fields: string[];
}
export interface V3AdvertiserDailyBudgetApiUpdateRequest {
    data: AdvertiserDailyBudgetUpdateRequest;
}
export declare class V3AdvertiserDailyBudgetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3AdvertiserDailyBudgetApiGetRequest): Promise<AdvertiserDailyBudgetGetResponseData>;
    getWithHttpInfo(request: V3AdvertiserDailyBudgetApiGetRequest): Promise<ApiResponse<AdvertiserDailyBudgetGetResponseData>>;
    update(request: V3AdvertiserDailyBudgetApiUpdateRequest): Promise<AdvertiserDailyBudgetUpdateResponseData>;
    updateWithHttpInfo(request: V3AdvertiserDailyBudgetApiUpdateRequest): Promise<ApiResponse<AdvertiserDailyBudgetUpdateResponseData>>;
}
