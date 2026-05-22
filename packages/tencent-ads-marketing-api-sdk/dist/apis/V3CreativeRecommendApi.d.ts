import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeRecommendGetRequest, CreativeRecommendGetResponseData } from "../models";
export interface V3CreativeRecommendApiGetRequest {
    data: CreativeRecommendGetRequest;
}
export declare class V3CreativeRecommendApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CreativeRecommendApiGetRequest): Promise<CreativeRecommendGetResponseData>;
    getWithHttpInfo(request: V3CreativeRecommendApiGetRequest): Promise<ApiResponse<CreativeRecommendGetResponseData>>;
}
