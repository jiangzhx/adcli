import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAddResponseData, BrandGetResponseData } from "../models";
export interface BrandApiAddRequest {
    accountId: number | string;
    name: string;
    brandImageFile: Blob;
}
export interface BrandApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class BrandApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: BrandApiAddRequest): Promise<BrandAddResponseData>;
    addWithHttpInfo(request: BrandApiAddRequest): Promise<ApiResponse<BrandAddResponseData>>;
    get(request: BrandApiGetRequest): Promise<BrandGetResponseData>;
    getWithHttpInfo(request: BrandApiGetRequest): Promise<ApiResponse<BrandGetResponseData>>;
}
