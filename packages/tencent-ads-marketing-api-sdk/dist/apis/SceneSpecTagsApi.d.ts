import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SceneSpecTagsGetResponseData } from "../models";
export interface SceneSpecTagsApiGetRequest {
    type_: string;
    accountId?: number | string;
    fields?: unknown;
}
export declare class SceneSpecTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: SceneSpecTagsApiGetRequest): Promise<SceneSpecTagsGetResponseData>;
    getWithHttpInfo(request: SceneSpecTagsApiGetRequest): Promise<ApiResponse<SceneSpecTagsGetResponseData>>;
}
