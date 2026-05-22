import { ApiClient, type ApiResponse } from "./client";
import type { CustomFeaturesGetResponseData } from "../model/index";
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
