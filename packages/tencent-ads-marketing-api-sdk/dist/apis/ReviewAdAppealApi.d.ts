import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReviewAdAppealAddRequest, ReviewAdAppealGetRequest, ReviewAdAppealGetResponseData } from "../models";
export interface ReviewAdAppealApiAddRequest {
    data: ReviewAdAppealAddRequest;
}
export interface ReviewAdAppealApiGetRequest {
    data: ReviewAdAppealGetRequest;
}
export declare class ReviewAdAppealApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ReviewAdAppealApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: ReviewAdAppealApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: ReviewAdAppealApiGetRequest): Promise<ReviewAdAppealGetResponseData>;
    getWithHttpInfo(request: ReviewAdAppealApiGetRequest): Promise<ApiResponse<ReviewAdAppealGetResponseData>>;
}
