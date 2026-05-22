import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductsSystemStatusGetResponseData } from "../models";
export interface ProductsSystemStatusApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    feedId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class ProductsSystemStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProductsSystemStatusApiGetRequest): Promise<ProductsSystemStatusGetResponseData>;
    getWithHttpInfo(request: ProductsSystemStatusApiGetRequest): Promise<ApiResponse<ProductsSystemStatusGetResponseData>>;
}
