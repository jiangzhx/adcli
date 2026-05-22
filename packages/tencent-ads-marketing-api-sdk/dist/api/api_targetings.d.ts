import { ApiClient, type ApiResponse } from "./client";
import type { TargetingsAddRequest, TargetingsAddResponseData, TargetingsDeleteRequest, TargetingsDeleteResponseData, TargetingsGetResponseData, TargetingsUpdateRequest, TargetingsUpdateResponseData } from "../model/index";
export interface TargetingsApiAddRequest {
    data: TargetingsAddRequest;
}
export interface TargetingsApiDeleteRequest {
    data: TargetingsDeleteRequest;
}
export interface TargetingsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface TargetingsApiUpdateRequest {
    data: TargetingsUpdateRequest;
}
export declare class TargetingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: TargetingsApiAddRequest): Promise<TargetingsAddResponseData>;
    addWithHttpInfo(request: TargetingsApiAddRequest): Promise<ApiResponse<TargetingsAddResponseData>>;
    delete(request: TargetingsApiDeleteRequest): Promise<TargetingsDeleteResponseData>;
    deleteWithHttpInfo(request: TargetingsApiDeleteRequest): Promise<ApiResponse<TargetingsDeleteResponseData>>;
    get(request: TargetingsApiGetRequest): Promise<TargetingsGetResponseData>;
    getWithHttpInfo(request: TargetingsApiGetRequest): Promise<ApiResponse<TargetingsGetResponseData>>;
    update(request: TargetingsApiUpdateRequest): Promise<TargetingsUpdateResponseData>;
    updateWithHttpInfo(request: TargetingsApiUpdateRequest): Promise<ApiResponse<TargetingsUpdateResponseData>>;
}
