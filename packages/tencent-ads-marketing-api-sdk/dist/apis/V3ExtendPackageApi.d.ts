import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ExtendPackageAddRequest, ExtendPackageAddResponseData, ExtendPackageGetResponseData, ExtendPackageUpdateRequest, ExtendPackageUpdateResponseData } from "../models";
export interface V3ExtendPackageApiAddRequest {
    data: ExtendPackageAddRequest;
}
export interface V3ExtendPackageApiGetRequest {
    accountId: number | string;
    packageId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3ExtendPackageApiUpdateRequest {
    data: ExtendPackageUpdateRequest;
}
export declare class V3ExtendPackageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ExtendPackageApiAddRequest): Promise<ExtendPackageAddResponseData>;
    addWithHttpInfo(request: V3ExtendPackageApiAddRequest): Promise<ApiResponse<ExtendPackageAddResponseData>>;
    get(request: V3ExtendPackageApiGetRequest): Promise<ExtendPackageGetResponseData>;
    getWithHttpInfo(request: V3ExtendPackageApiGetRequest): Promise<ApiResponse<ExtendPackageGetResponseData>>;
    update(request: V3ExtendPackageApiUpdateRequest): Promise<ExtendPackageUpdateResponseData>;
    updateWithHttpInfo(request: V3ExtendPackageApiUpdateRequest): Promise<ApiResponse<ExtendPackageUpdateResponseData>>;
}
