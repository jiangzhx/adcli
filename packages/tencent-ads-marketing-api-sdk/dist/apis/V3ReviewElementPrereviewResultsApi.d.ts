import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReviewElementPrereviewResultsGetRequest, ReviewElementPrereviewResultsGetResponseData } from "../models";
export interface V3ReviewElementPrereviewResultsApiGetRequest {
    data: ReviewElementPrereviewResultsGetRequest;
}
export declare class V3ReviewElementPrereviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ReviewElementPrereviewResultsApiGetRequest): Promise<ReviewElementPrereviewResultsGetResponseData>;
    getWithHttpInfo(request: V3ReviewElementPrereviewResultsApiGetRequest): Promise<ApiResponse<ReviewElementPrereviewResultsGetResponseData>>;
}
