import { ApiClient, type ApiResponse } from "./client";
import type { GameFeatureV6AddRequest, GameFeatureV6AddResponseData, GameFeatureV6GetResponseData } from "../../model/v3/index";
export interface GameFeatureV6ApiAddRequest {
    data: GameFeatureV6AddRequest;
}
export interface GameFeatureV6ApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingTargetDetailId: string;
    fields?: unknown;
}
export declare class GameFeatureV6Api {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: GameFeatureV6ApiAddRequest): Promise<GameFeatureV6AddResponseData>;
    addWithHttpInfo(request: GameFeatureV6ApiAddRequest): Promise<ApiResponse<GameFeatureV6AddResponseData>>;
    get(request: GameFeatureV6ApiGetRequest): Promise<GameFeatureV6GetResponseData>;
    getWithHttpInfo(request: GameFeatureV6ApiGetRequest): Promise<ApiResponse<GameFeatureV6GetResponseData>>;
}
