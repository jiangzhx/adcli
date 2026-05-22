import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetPermissionsScenesUpdateRequest, AssetPermissionsScenesUpdateResponseData } from "../models";
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
