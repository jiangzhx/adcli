import { ApiClient, type ApiResponse } from "./client";
import type { AssetPermissionsAddRequest, AssetPermissionsAddResponseData, AssetPermissionsDeleteRequest } from "../model/index";
export interface AssetPermissionsApiAddRequest {
    data: AssetPermissionsAddRequest;
}
export interface AssetPermissionsApiDeleteRequest {
    data: AssetPermissionsDeleteRequest;
}
export declare class AssetPermissionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: AssetPermissionsApiAddRequest): Promise<AssetPermissionsAddResponseData>;
    addWithHttpInfo(request: AssetPermissionsApiAddRequest): Promise<ApiResponse<AssetPermissionsAddResponseData>>;
    delete(request: AssetPermissionsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: AssetPermissionsApiDeleteRequest): Promise<ApiResponse<unknown>>;
}
