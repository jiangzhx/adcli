import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductCategoriesListGetResponseData } from "../models";
export interface ProductCategoriesListApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    page: number;
    pageSize: number;
    level?: number;
    categoryId?: number | string;
    categoryName?: string;
    fields?: unknown;
}
export declare class ProductCategoriesListApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProductCategoriesListApiGetRequest): Promise<ProductCategoriesListGetResponseData>;
    getWithHttpInfo(request: ProductCategoriesListApiGetRequest): Promise<ApiResponse<ProductCategoriesListGetResponseData>>;
}
