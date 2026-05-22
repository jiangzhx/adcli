import { ApiClient, type ApiResponse } from "./client";
import type { AdAppealQuotaGetRequest, AdAppealQuotaGetResponseData } from "../model/index";
export interface AdAppealQuotaApiGetRequest {
    data: AdAppealQuotaGetRequest;
}
export declare class AdAppealQuotaApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdAppealQuotaApiGetRequest): Promise<AdAppealQuotaGetResponseData>;
    getWithHttpInfo(request: AdAppealQuotaApiGetRequest): Promise<ApiResponse<AdAppealQuotaGetResponseData>>;
}
