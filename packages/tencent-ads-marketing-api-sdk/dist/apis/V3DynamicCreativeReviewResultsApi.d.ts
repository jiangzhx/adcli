import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicCreativeReviewResultsGetResponseData } from "../models";
export interface V3DynamicCreativeReviewResultsApiGetRequest {
    accountId: number | string;
    dynamicCreativeIdList: number[];
    fields?: unknown;
}
export declare class V3DynamicCreativeReviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3DynamicCreativeReviewResultsApiGetRequest): Promise<DynamicCreativeReviewResultsGetResponseData>;
    getWithHttpInfo(request: V3DynamicCreativeReviewResultsApiGetRequest): Promise<ApiResponse<DynamicCreativeReviewResultsGetResponseData>>;
}
