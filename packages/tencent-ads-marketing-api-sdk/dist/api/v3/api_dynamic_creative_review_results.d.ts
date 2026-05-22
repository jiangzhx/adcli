import { ApiClient, type ApiResponse } from "./client";
import type { DynamicCreativeReviewResultsGetResponseData } from "../../model/v3/index";
export interface DynamicCreativeReviewResultsApiGetRequest {
    accountId: number | string;
    dynamicCreativeIdList: number[];
    fields?: unknown;
}
export declare class DynamicCreativeReviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: DynamicCreativeReviewResultsApiGetRequest): Promise<DynamicCreativeReviewResultsGetResponseData>;
    getWithHttpInfo(request: DynamicCreativeReviewResultsApiGetRequest): Promise<ApiResponse<DynamicCreativeReviewResultsGetResponseData>>;
}
