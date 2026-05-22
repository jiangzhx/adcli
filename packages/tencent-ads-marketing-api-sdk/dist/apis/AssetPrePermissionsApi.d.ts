import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AssetPrePermissionsGetResponseData, AssetPrePermissionsUpdateRequest } from "../models";
export interface AssetPrePermissionsApiGetRequest {
    accountId: number | string;
    assetType: string;
    assetId?: number | string;
    assetName?: string;
    pathType?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface AssetPrePermissionsApiUpdateRequest {
    data: AssetPrePermissionsUpdateRequest;
}
export declare class AssetPrePermissionsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: AssetPrePermissionsApiGetRequest): Promise<AssetPrePermissionsGetResponseData>;
    getWithHttpInfo(request: AssetPrePermissionsApiGetRequest): Promise<ApiResponse<AssetPrePermissionsGetResponseData>>;
    update(request: AssetPrePermissionsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: AssetPrePermissionsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
