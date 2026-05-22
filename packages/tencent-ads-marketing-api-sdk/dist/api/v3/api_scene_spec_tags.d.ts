import { ApiClient, type ApiResponse } from "./client";
import type { SceneSpecTagsGetResponseData } from "../../model/v3/index";
export interface SceneSpecTagsApiGetRequest {
    accountId: number | string;
    type_: string;
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
