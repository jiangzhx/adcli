import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameFeatureTagsGetResponseData } from "../models";
export interface GameFeatureTagsApiGetRequest {
    accountId: number | string;
    type_: string;
    fields?: unknown;
}
export declare class GameFeatureTagsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: GameFeatureTagsApiGetRequest): Promise<GameFeatureTagsGetResponseData>;
    getWithHttpInfo(request: GameFeatureTagsApiGetRequest): Promise<ApiResponse<GameFeatureTagsGetResponseData>>;
}
