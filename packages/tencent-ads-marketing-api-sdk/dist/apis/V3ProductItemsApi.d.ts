import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsAddRequest, ProductItemsAddResponseData, ProductItemsBatchUpdateRequest, ProductItemsDeleteRequest, ProductItemsGetResponseData, ProductItemsUpdateRequest } from "../models";
export interface V3ProductItemsApiAddRequest {
    data: ProductItemsAddRequest;
}
export interface V3ProductItemsApiBatchUpdateRequest {
    data: ProductItemsBatchUpdateRequest;
}
export interface V3ProductItemsApiDeleteRequest {
    data: ProductItemsDeleteRequest;
}
export interface V3ProductItemsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    filtering?: unknown;
    fields?: unknown;
}
export interface V3ProductItemsApiUpdateRequest {
    data: ProductItemsUpdateRequest;
}
export declare class V3ProductItemsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ProductItemsApiAddRequest): Promise<ProductItemsAddResponseData>;
    addWithHttpInfo(request: V3ProductItemsApiAddRequest): Promise<ApiResponse<ProductItemsAddResponseData>>;
    batchUpdate(request: V3ProductItemsApiBatchUpdateRequest): Promise<unknown>;
    batchUpdateWithHttpInfo(request: V3ProductItemsApiBatchUpdateRequest): Promise<ApiResponse<unknown>>;
    delete(request: V3ProductItemsApiDeleteRequest): Promise<unknown>;
    deleteWithHttpInfo(request: V3ProductItemsApiDeleteRequest): Promise<ApiResponse<unknown>>;
    get(request: V3ProductItemsApiGetRequest): Promise<ProductItemsGetResponseData>;
    getWithHttpInfo(request: V3ProductItemsApiGetRequest): Promise<ApiResponse<ProductItemsGetResponseData>>;
    update(request: V3ProductItemsApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3ProductItemsApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
