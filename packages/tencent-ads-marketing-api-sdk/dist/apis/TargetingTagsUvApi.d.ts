import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsUvGetResponseData } from "../models";
export interface TargetingTagsUvApiGetRequest {
    accountId: number | string;
    categoryType: string;
    categoryList?: unknown;
    fields?: unknown;
}
export declare class TargetingTagsUvApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetingTagsUvApiGetRequest): Promise<TargetingTagsUvGetResponseData>;
    getWithHttpInfo(request: TargetingTagsUvApiGetRequest): Promise<ApiResponse<TargetingTagsUvGetResponseData>>;
}
