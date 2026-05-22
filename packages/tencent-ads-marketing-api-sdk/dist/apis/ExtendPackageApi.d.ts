import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ExtendPackageAddRequest, ExtendPackageAddResponseData, ExtendPackageGetResponseData, ExtendPackageUpdateRequest, ExtendPackageUpdateResponseData } from "../models";
export interface ExtendPackageApiAddRequest {
    data: ExtendPackageAddRequest;
}
export interface ExtendPackageApiGetRequest {
    accountId: number | string;
    packageId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface ExtendPackageApiUpdateRequest {
    data: ExtendPackageUpdateRequest;
}
export declare class ExtendPackageApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ExtendPackageApiAddRequest): Promise<ExtendPackageAddResponseData>;
    addWithHttpInfo(request: ExtendPackageApiAddRequest): Promise<ApiResponse<ExtendPackageAddResponseData>>;
    get(request: ExtendPackageApiGetRequest): Promise<ExtendPackageGetResponseData>;
    getWithHttpInfo(request: ExtendPackageApiGetRequest): Promise<ApiResponse<ExtendPackageGetResponseData>>;
    update(request: ExtendPackageApiUpdateRequest): Promise<ExtendPackageUpdateResponseData>;
    updateWithHttpInfo(request: ExtendPackageApiUpdateRequest): Promise<ApiResponse<ExtendPackageUpdateResponseData>>;
}
