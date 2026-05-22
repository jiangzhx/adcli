import { ApiClient, type ApiResponse } from "./client";
import type { RtatargetAddRequest, RtatargetDeleteRequest, RtatargetGetRequest, RtatargetGetResponseData } from "../../model/v3/index";
export interface RtatargetApiAddRequest {
    data: RtatargetAddRequest;
}
export interface RtatargetApiDeleteRequest {
    data: RtatargetDeleteRequest;
}
export interface RtatargetApiGetRequest {
    data: RtatargetGetRequest;
}
export declare class RtatargetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: RtatargetApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: RtatargetApiAddRequest): Promise<ApiResponse<unknown>>;
    delete(request: RtatargetApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: RtatargetApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: RtatargetApiGetRequest): Promise<RtatargetGetResponseData>;
    getWithHttpInfo(request: RtatargetApiGetRequest): Promise<ApiResponse<RtatargetGetResponseData>>;
}
