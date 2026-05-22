import { ApiClient, type ApiResponse } from "./client";
import type { ProductCatalogsAddRequest, ProductCatalogsAddResponseData, ProductCatalogsGetResponseData } from "../model/index";
export interface ProductCatalogsApiAddRequest {
    data: ProductCatalogsAddRequest;
}
export interface ProductCatalogsApiGetRequest {
    accountId: number | string;
    catalogId?: number | string;
    catalogName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class ProductCatalogsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProductCatalogsApiAddRequest): Promise<ProductCatalogsAddResponseData>;
    addWithHttpInfo(request: ProductCatalogsApiAddRequest): Promise<ApiResponse<ProductCatalogsAddResponseData>>;
    get(request: ProductCatalogsApiGetRequest): Promise<ProductCatalogsGetResponseData>;
    getWithHttpInfo(request: ProductCatalogsApiGetRequest): Promise<ApiResponse<ProductCatalogsGetResponseData>>;
}
