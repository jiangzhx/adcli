import { ApiClient, type ApiResponse } from "./client";
import type { CreativeRecommendGetRequest, CreativeRecommendGetResponseData } from "../../model/v3/index";
export interface CreativeRecommendApiGetRequest {
    data: CreativeRecommendGetRequest;
}
export declare class CreativeRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CreativeRecommendApiGetRequest): Promise<CreativeRecommendGetResponseData>;
    getWithHttpInfo(request: CreativeRecommendApiGetRequest): Promise<ApiResponse<CreativeRecommendGetResponseData>>;
}
