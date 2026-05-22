import { ApiClient, type ApiResponse } from "./client";
import type { ProductItemsDetailGetResponseData } from "../../model/v3/index";
export interface ProductItemsDetailApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productOuterId: string;
    fields?: unknown;
}
export declare class ProductItemsDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProductItemsDetailApiGetRequest): Promise<ProductItemsDetailGetResponseData>;
    getWithHttpInfo(request: ProductItemsDetailApiGetRequest): Promise<ApiResponse<ProductItemsDetailGetResponseData>>;
}
