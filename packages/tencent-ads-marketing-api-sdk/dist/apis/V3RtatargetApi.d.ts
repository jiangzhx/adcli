import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtatargetAddRequest, RtatargetDeleteRequest, RtatargetGetRequest, RtatargetGetResponseData } from "../models";
export interface V3RtatargetApiAddRequest {
    data: RtatargetAddRequest;
}
export interface V3RtatargetApiDeleteRequest {
    data: RtatargetDeleteRequest;
}
export interface V3RtatargetApiGetRequest {
    data: RtatargetGetRequest;
}
export declare class V3RtatargetApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3RtatargetApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3RtatargetApiAddRequest): Promise<ApiResponse<unknown>>;
    delete(request: V3RtatargetApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3RtatargetApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: V3RtatargetApiGetRequest): Promise<RtatargetGetResponseData>;
    getWithHttpInfo(request: V3RtatargetApiGetRequest): Promise<ApiResponse<RtatargetGetResponseData>>;
}
