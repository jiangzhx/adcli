import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SceneSpecTagsGetResponseData } from "../models";
export interface V3SceneSpecTagsApiGetRequest {
    accountId: number | string;
    type_: string;
    fields?: unknown;
}
export declare class V3SceneSpecTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3SceneSpecTagsApiGetRequest): Promise<SceneSpecTagsGetResponseData>;
    getWithHttpInfo(request: V3SceneSpecTagsApiGetRequest): Promise<ApiResponse<SceneSpecTagsGetResponseData>>;
}
