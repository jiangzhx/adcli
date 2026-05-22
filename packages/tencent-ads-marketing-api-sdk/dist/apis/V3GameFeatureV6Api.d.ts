import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { GameFeatureV6AddRequest, GameFeatureV6AddResponseData, GameFeatureV6GetResponseData } from "../models";
export interface V3GameFeatureV6ApiAddRequest {
    data: GameFeatureV6AddRequest;
}
export interface V3GameFeatureV6ApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingTargetDetailId: string;
    fields?: unknown;
}
export declare class V3GameFeatureV6Api {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3GameFeatureV6ApiAddRequest): Promise<GameFeatureV6AddResponseData>;
    addWithHttpInfo(request: V3GameFeatureV6ApiAddRequest): Promise<ApiResponse<GameFeatureV6AddResponseData>>;
    get(request: V3GameFeatureV6ApiGetRequest): Promise<GameFeatureV6GetResponseData>;
    getWithHttpInfo(request: V3GameFeatureV6ApiGetRequest): Promise<ApiResponse<GameFeatureV6GetResponseData>>;
}
