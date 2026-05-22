import { ApiClient, type ApiResponse } from "./client";
import type { ComponentReviewResultsGetResponseData } from "../../model/v3/index";
export interface ComponentReviewResultsApiGetRequest {
    accountId: number | string;
    componentIdList: number[];
    fields?: unknown;
}
export declare class ComponentReviewResultsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ComponentReviewResultsApiGetRequest): Promise<ComponentReviewResultsGetResponseData>;
    getWithHttpInfo(request: ComponentReviewResultsApiGetRequest): Promise<ApiResponse<ComponentReviewResultsGetResponseData>>;
}
