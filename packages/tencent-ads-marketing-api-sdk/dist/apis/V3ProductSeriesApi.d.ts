import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductSeriesAddRequest, ProductSeriesAddResponseData, ProductSeriesGetResponseData } from "../models";
export interface V3ProductSeriesApiAddRequest {
    data: ProductSeriesAddRequest;
}
export interface V3ProductSeriesApiGetRequest {
    accountId: number | string;
    catalogId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3ProductSeriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3ProductSeriesApiAddRequest): Promise<ProductSeriesAddResponseData>;
    addWithHttpInfo(request: V3ProductSeriesApiAddRequest): Promise<ApiResponse<ProductSeriesAddResponseData>>;
    get(request: V3ProductSeriesApiGetRequest): Promise<ProductSeriesGetResponseData>;
    getWithHttpInfo(request: V3ProductSeriesApiGetRequest): Promise<ApiResponse<ProductSeriesGetResponseData>>;
}
