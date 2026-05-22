import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsVerticalsGetResponseData } from "../models";
export interface V3ProductItemsVerticalsApiGetRequest {
    fields?: unknown;
}
export declare class V3ProductItemsVerticalsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProductItemsVerticalsApiGetRequest): Promise<ProductItemsVerticalsGetResponseData>;
    getWithHttpInfo(request: V3ProductItemsVerticalsApiGetRequest): Promise<ApiResponse<ProductItemsVerticalsGetResponseData>>;
}
