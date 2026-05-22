import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReviewElementPrereviewResultsGetRequest, ReviewElementPrereviewResultsGetResponseData } from "../models";
export interface ReviewElementPrereviewResultsApiGetRequest {
    data: ReviewElementPrereviewResultsGetRequest;
}
export declare class ReviewElementPrereviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ReviewElementPrereviewResultsApiGetRequest): Promise<ReviewElementPrereviewResultsGetResponseData>;
    getWithHttpInfo(request: ReviewElementPrereviewResultsApiGetRequest): Promise<ApiResponse<ReviewElementPrereviewResultsGetResponseData>>;
}
