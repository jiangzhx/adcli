import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductSeriesAddRequest, ProductSeriesAddResponseData, ProductSeriesGetResponseData } from "../models";
export interface ProductSeriesApiAddRequest {
    data: ProductSeriesAddRequest;
}
export interface ProductSeriesApiGetRequest {
    accountId: number | string;
    catalogId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class ProductSeriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProductSeriesApiAddRequest): Promise<ProductSeriesAddResponseData>;
    addWithHttpInfo(request: ProductSeriesApiAddRequest): Promise<ApiResponse<ProductSeriesAddResponseData>>;
    get(request: ProductSeriesApiGetRequest): Promise<ProductSeriesGetResponseData>;
    getWithHttpInfo(request: ProductSeriesApiGetRequest): Promise<ApiResponse<ProductSeriesGetResponseData>>;
}
