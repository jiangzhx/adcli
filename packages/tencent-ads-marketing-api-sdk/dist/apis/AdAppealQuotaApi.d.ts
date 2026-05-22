import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdAppealQuotaGetRequest, AdAppealQuotaGetResponseData } from "../models";
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
