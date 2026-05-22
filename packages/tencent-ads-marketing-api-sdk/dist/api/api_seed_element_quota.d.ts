import { ApiClient, type ApiResponse } from "./client";
import type { SeedElementQuotaGetRequest, SeedElementQuotaGetResponseData } from "../model/index";
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
