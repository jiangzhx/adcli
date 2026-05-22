import { ApiClient, type ApiResponse } from "./client";
import type { ProductItemsVerticalsGetResponseData } from "../model/index";
export interface ProductItemsVerticalsApiGetRequest {
    fields?: unknown;
}
export declare class ProductItemsVerticalsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProductItemsVerticalsApiGetRequest): Promise<ProductItemsVerticalsGetResponseData>;
    getWithHttpInfo(request: ProductItemsVerticalsApiGetRequest): Promise<ApiResponse<ProductItemsVerticalsGetResponseData>>;
}
