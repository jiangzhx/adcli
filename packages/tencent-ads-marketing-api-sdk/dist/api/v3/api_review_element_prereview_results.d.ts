import { ApiClient, type ApiResponse } from "./client";
import type { ReviewElementPrereviewResultsGetRequest, ReviewElementPrereviewResultsGetResponseData } from "../../model/v3/index";
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
