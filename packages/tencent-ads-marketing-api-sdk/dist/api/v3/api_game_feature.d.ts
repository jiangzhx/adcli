import { ApiClient, type ApiResponse } from "./client";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData } from "../../model/v3/index";
export interface GameFeatureApiAddRequest {
    data: GameFeatureAddRequest;
}
export interface GameFeatureApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingTargetDetailId: string;
    fields?: unknown;
}
export declare class GameFeatureApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: GameFeatureApiAddRequest): Promise<GameFeatureAddResponseData>;
    addWithHttpInfo(request: GameFeatureApiAddRequest): Promise<ApiResponse<GameFeatureAddResponseData>>;
    get(request: GameFeatureApiGetRequest): Promise<GameFeatureGetResponseData>;
    getWithHttpInfo(request: GameFeatureApiGetRequest): Promise<ApiResponse<GameFeatureGetResponseData>>;
}
