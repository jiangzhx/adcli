import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsDetailGetResponseData } from "../models";
export interface V3ProductItemsDetailApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    productOuterId: string;
    fields?: unknown;
}
export declare class V3ProductItemsDetailApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProductItemsDetailApiGetRequest): Promise<ProductItemsDetailGetResponseData>;
    getWithHttpInfo(request: V3ProductItemsDetailApiGetRequest): Promise<ApiResponse<ProductItemsDetailGetResponseData>>;
}
