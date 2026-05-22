import { ApiClient, type ApiResponse } from "./client";
import type { GameFeatureTagsGetResponseData } from "../model/index";
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
