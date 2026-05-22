import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsVerticalsGetResponseData } from "../models";
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
