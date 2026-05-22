import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductCategoriesListGetResponseData } from "../models";
export interface V3ProductCategoriesListApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    page: number;
    pageSize: number;
    level?: number;
    categoryId?: number | string;
    categoryName?: string;
    fields?: unknown;
}
export declare class V3ProductCategoriesListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProductCategoriesListApiGetRequest): Promise<ProductCategoriesListGetResponseData>;
    getWithHttpInfo(request: V3ProductCategoriesListApiGetRequest): Promise<ApiResponse<ProductCategoriesListGetResponseData>>;
}
