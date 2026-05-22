import { ApiClient, type ApiResponse } from "./client";
import type { ProductItemsAddRequest, ProductItemsAddResponseData, ProductItemsBatchUpdateRequest, ProductItemsDeleteRequest, ProductItemsGetResponseData, ProductItemsUpdateRequest } from "../../model/v3/index";
export interface ProductItemsApiAddRequest {
    data: ProductItemsAddRequest;
}
export interface ProductItemsApiBatchUpdateRequest {
    data: ProductItemsBatchUpdateRequest;
}
export interface ProductItemsApiDeleteRequest {
    data: ProductItemsDeleteRequest;
}
export interface ProductItemsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    filtering?: unknown;
    fields?: unknown;
}
export interface ProductItemsApiUpdateRequest {
    data: ProductItemsUpdateRequest;
}
export declare class ProductItemsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: ProductItemsApiAddRequest): Promise<ProductItemsAddResponseData>;
    addWithHttpInfo(request: ProductItemsApiAddRequest): Promise<ApiResponse<ProductItemsAddResponseData>>;
    batchUpdate(request: ProductItemsApiBatchUpdateRequest): Promise<unknown>;
    batchUpdateWithHttpInfo(request: ProductItemsApiBatchUpdateRequest): Promise<ApiResponse<unknown>>;
    delete(request: ProductItemsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: ProductItemsApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: ProductItemsApiGetRequest): Promise<ProductItemsGetResponseData>;
    getWithHttpInfo(request: ProductItemsApiGetRequest): Promise<ApiResponse<ProductItemsGetResponseData>>;
    update(request: ProductItemsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: ProductItemsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
