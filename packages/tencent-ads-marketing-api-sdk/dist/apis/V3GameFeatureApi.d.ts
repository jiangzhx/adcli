import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData } from "../models";
export interface V3GameFeatureApiAddRequest {
    data: GameFeatureAddRequest;
}
export interface V3GameFeatureApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingTargetDetailId: string;
    fields?: unknown;
}
export declare class V3GameFeatureApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3GameFeatureApiAddRequest): Promise<GameFeatureAddResponseData>;
    addWithHttpInfo(request: V3GameFeatureApiAddRequest): Promise<ApiResponse<GameFeatureAddResponseData>>;
    get(request: V3GameFeatureApiGetRequest): Promise<GameFeatureGetResponseData>;
    getWithHttpInfo(request: V3GameFeatureApiGetRequest): Promise<ApiResponse<GameFeatureGetResponseData>>;
}
