import { ApiClient, type ApiResponse } from "./client";
import type { TargetingTagsGetResponseData } from "../model/index";
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
