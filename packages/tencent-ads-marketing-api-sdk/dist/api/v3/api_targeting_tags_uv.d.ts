import { ApiClient, type ApiResponse } from "./client";
import type { TargetingTagsUvGetResponseData } from "../../model/v3/index";
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
