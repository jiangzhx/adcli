import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceEstimationsGetRequest, CustomAudienceEstimationsGetResponseData } from "../models";
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
