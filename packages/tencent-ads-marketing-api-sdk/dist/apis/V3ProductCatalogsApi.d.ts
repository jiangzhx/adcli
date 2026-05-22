import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductCatalogsAddRequest, ProductCatalogsAddResponseData, ProductCatalogsGetResponseData } from "../models";
export interface V3ProductCatalogsApiAddRequest {
    data: ProductCatalogsAddRequest;
}
export interface V3ProductCatalogsApiGetRequest {
    accountId: number | string;
    catalogId?: number | string;
    catalogName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3ProductCatalogsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ProductCatalogsApiAddRequest): Promise<ProductCatalogsAddResponseData>;
    addWithHttpInfo(request: V3ProductCatalogsApiAddRequest): Promise<ApiResponse<ProductCatalogsAddResponseData>>;
    get(request: V3ProductCatalogsApiGetRequest): Promise<ProductCatalogsGetResponseData>;
    getWithHttpInfo(request: V3ProductCatalogsApiGetRequest): Promise<ApiResponse<ProductCatalogsGetResponseData>>;
}
