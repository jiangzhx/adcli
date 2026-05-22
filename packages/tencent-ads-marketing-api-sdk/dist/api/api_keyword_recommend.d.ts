import { ApiClient, type ApiResponse } from "./client";
import type { KeywordRecommendGetRequest, KeywordRecommendGetResponseData } from "../model/index";
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
