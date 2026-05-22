import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomFeaturesGetResponseData } from "../models";
export interface CustomFeaturesApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class CustomFeaturesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CustomFeaturesApiGetRequest): Promise<CustomFeaturesGetResponseData>;
    getWithHttpInfo(request: CustomFeaturesApiGetRequest): Promise<ApiResponse<CustomFeaturesGetResponseData>>;
}
