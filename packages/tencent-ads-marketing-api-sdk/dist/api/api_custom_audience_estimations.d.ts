import { ApiClient, type ApiResponse } from "./client";
import type { CustomAudienceEstimationsGetRequest, CustomAudienceEstimationsGetResponseData } from "../model/index";
export interface CustomAudienceEstimationsApiGetRequest {
    data: CustomAudienceEstimationsGetRequest;
}
export declare class CustomAudienceEstimationsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData>;
    getWithHttpInfo(request: CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>>;
}
