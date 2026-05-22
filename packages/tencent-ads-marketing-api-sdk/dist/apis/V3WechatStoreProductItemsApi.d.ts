import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatStoreProductItemsGetResponseData } from "../models";
export interface V3WechatStoreProductItemsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatStoreProductItemsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatStoreProductItemsApiGetRequest): Promise<WechatStoreProductItemsGetResponseData>;
    getWithHttpInfo(request: V3WechatStoreProductItemsApiGetRequest): Promise<ApiResponse<WechatStoreProductItemsGetResponseData>>;
}
