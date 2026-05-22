import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsGetResponseData } from "../models";
export interface TargetingTagsApiGetRequest {
    type_: string;
    accountId?: number | string;
    tagSpec?: unknown;
    fields?: unknown;
}
export declare class TargetingTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: TargetingTagsApiGetRequest): Promise<TargetingTagsGetResponseData>;
    getWithHttpInfo(request: TargetingTagsApiGetRequest): Promise<ApiResponse<TargetingTagsGetResponseData>>;
}
