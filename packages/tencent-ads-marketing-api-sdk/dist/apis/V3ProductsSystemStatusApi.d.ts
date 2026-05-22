import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductsSystemStatusGetResponseData } from "../models";
export interface V3ProductsSystemStatusApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    feedId?: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3ProductsSystemStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3ProductsSystemStatusApiGetRequest): Promise<ProductsSystemStatusGetResponseData>;
    getWithHttpInfo(request: V3ProductsSystemStatusApiGetRequest): Promise<ApiResponse<ProductsSystemStatusGetResponseData>>;
}
