import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { TargetingTagsGetResponseData } from "../models";
export interface V3TargetingTagsApiGetRequest {
    accountId: number | string;
    type_: string;
    tagSpec?: unknown;
    fields?: unknown;
}
export declare class V3TargetingTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3TargetingTagsApiGetRequest): Promise<TargetingTagsGetResponseData>;
    getWithHttpInfo(request: V3TargetingTagsApiGetRequest): Promise<ApiResponse<TargetingTagsGetResponseData>>;
}
