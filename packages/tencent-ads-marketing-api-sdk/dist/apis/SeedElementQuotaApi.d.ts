import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SeedElementQuotaGetRequest, SeedElementQuotaGetResponseData } from "../models";
export interface SeedElementQuotaApiGetRequest {
    data: SeedElementQuotaGetRequest;
}
export declare class SeedElementQuotaApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: SeedElementQuotaApiGetRequest): Promise<SeedElementQuotaGetResponseData>;
    getWithHttpInfo(request: SeedElementQuotaApiGetRequest): Promise<ApiResponse<SeedElementQuotaGetResponseData>>;
}
