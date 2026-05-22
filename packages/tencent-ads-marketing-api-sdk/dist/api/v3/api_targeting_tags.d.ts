import { ApiClient, type ApiResponse } from "./client";
import type { TargetingTagsGetResponseData } from "../../model/v3/index";
export interface TargetingTagsApiGetRequest {
    accountId: number | string;
    type_: string;
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
