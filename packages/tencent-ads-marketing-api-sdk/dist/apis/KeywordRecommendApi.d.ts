import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordRecommendGetRequest, KeywordRecommendGetResponseData } from "../models";
export interface KeywordRecommendApiGetRequest {
    data: KeywordRecommendGetRequest;
}
export declare class KeywordRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: KeywordRecommendApiGetRequest): Promise<KeywordRecommendGetResponseData>;
    getWithHttpInfo(request: KeywordRecommendApiGetRequest): Promise<ApiResponse<KeywordRecommendGetResponseData>>;
}
