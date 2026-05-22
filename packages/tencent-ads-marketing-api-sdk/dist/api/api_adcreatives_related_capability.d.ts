import { ApiClient, type ApiResponse } from "./client";
import type { AdcreativesRelatedCapabilityGetResponseData } from "../model/index";
export interface AdcreativesRelatedCapabilityApiGetRequest {
    accountId: number | string;
    adId: number | string;
    fields?: unknown;
}
export declare class AdcreativesRelatedCapabilityApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AdcreativesRelatedCapabilityApiGetRequest): Promise<AdcreativesRelatedCapabilityGetResponseData>;
    getWithHttpInfo(request: AdcreativesRelatedCapabilityApiGetRequest): Promise<ApiResponse<AdcreativesRelatedCapabilityGetResponseData>>;
}
