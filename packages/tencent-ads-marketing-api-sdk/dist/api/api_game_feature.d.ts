import { ApiClient, type ApiResponse } from "./client";
import type { GameFeatureAddRequest, GameFeatureAddResponseData, GameFeatureGetResponseData, GameFeatureUpdateRequest, GameFeatureUpdateResponseData } from "../model/index";
export interface GameFeatureApiAddRequest {
    data: GameFeatureAddRequest;
}
export interface GameFeatureApiGetRequest {
    accountId: number | string;
    promotedObjectType: string;
    promotedObjectId: string;
    fields?: unknown;
}
export interface GameFeatureApiUpdateRequest {
    data: GameFeatureUpdateRequest;
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
    update(request: GameFeatureApiUpdateRequest): Promise<GameFeatureUpdateResponseData>;
    updateWithHttpInfo(request: GameFeatureApiUpdateRequest): Promise<ApiResponse<GameFeatureUpdateResponseData>>;
}
