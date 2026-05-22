import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAddResponseData, BrandGetResponseData } from "../models";
export interface V3BrandApiAddRequest {
    accountId: number | string;
    name: string;
    brandImageFile: Blob;
}
export interface V3BrandApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3BrandApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3BrandApiAddRequest): Promise<BrandAddResponseData>;
    addWithHttpInfo(request: V3BrandApiAddRequest): Promise<ApiResponse<BrandAddResponseData>>;
    get(request: V3BrandApiGetRequest): Promise<BrandGetResponseData>;
    getWithHttpInfo(request: V3BrandApiGetRequest): Promise<ApiResponse<BrandGetResponseData>>;
}
