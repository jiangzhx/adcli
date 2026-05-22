import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameFeatureTagsGetResponseData } from "../models";
export interface V3GameFeatureTagsApiGetRequest {
    accountId: number | string;
    type_: string;
    fields?: unknown;
}
export declare class V3GameFeatureTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3GameFeatureTagsApiGetRequest): Promise<GameFeatureTagsGetResponseData>;
    getWithHttpInfo(request: V3GameFeatureTagsApiGetRequest): Promise<ApiResponse<GameFeatureTagsGetResponseData>>;
}
