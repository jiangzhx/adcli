import { ApiClient, type ApiResponse } from "./client";
import type { AssetPermissionsScenesUpdateRequest, AssetPermissionsScenesUpdateResponseData } from "../model/index";
export interface AssetPermissionsScenesApiUpdateRequest {
    data: AssetPermissionsScenesUpdateRequest;
}
export declare class AssetPermissionsScenesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: AssetPermissionsScenesApiUpdateRequest): Promise<AssetPermissionsScenesUpdateResponseData>;
    updateWithHttpInfo(request: AssetPermissionsScenesApiUpdateRequest): Promise<ApiResponse<AssetPermissionsScenesUpdateResponseData>>;
}
