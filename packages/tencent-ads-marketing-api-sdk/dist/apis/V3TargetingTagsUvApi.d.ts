import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsUvGetResponseData } from "../models";
export interface V3TargetingTagsUvApiGetRequest {
    accountId: number | string;
    categoryType: string;
    categoryList?: unknown;
    fields?: unknown;
}
export declare class V3TargetingTagsUvApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3TargetingTagsUvApiGetRequest): Promise<TargetingTagsUvGetResponseData>;
    getWithHttpInfo(request: V3TargetingTagsUvApiGetRequest): Promise<ApiResponse<TargetingTagsUvGetResponseData>>;
}
