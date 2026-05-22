import { ApiClient, type ApiResponse } from "./client";
import type { TargetingsShareAddRequest, TargetingsShareAddResponseData, TargetingsShareGetResponseData } from "../model/index";
export interface TargetingsShareApiAddRequest {
    data: TargetingsShareAddRequest;
}
export interface TargetingsShareApiGetRequest {
    accountId: number | string;
    targetingId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class TargetingsShareApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: TargetingsShareApiAddRequest): Promise<TargetingsShareAddResponseData>;
    addWithHttpInfo(request: TargetingsShareApiAddRequest): Promise<ApiResponse<TargetingsShareAddResponseData>>;
    get(request: TargetingsShareApiGetRequest): Promise<TargetingsShareGetResponseData>;
    getWithHttpInfo(request: TargetingsShareApiGetRequest): Promise<ApiResponse<TargetingsShareGetResponseData>>;
}
