import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentReviewResultsGetResponseData } from "../models";
export interface V3ComponentReviewResultsApiGetRequest {
    accountId: number | string;
    componentIdList: number[];
    fields?: unknown;
}
export declare class V3ComponentReviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ComponentReviewResultsApiGetRequest): Promise<ComponentReviewResultsGetResponseData>;
    getWithHttpInfo(request: V3ComponentReviewResultsApiGetRequest): Promise<ApiResponse<ComponentReviewResultsGetResponseData>>;
}
