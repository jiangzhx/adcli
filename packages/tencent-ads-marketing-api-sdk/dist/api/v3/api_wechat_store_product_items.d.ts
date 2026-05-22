import { ApiClient, type ApiResponse } from "./client";
import type { WechatStoreProductItemsGetResponseData } from "../../model/v3/index";
export interface WechatStoreProductItemsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatStoreProductItemsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatStoreProductItemsApiGetRequest): Promise<WechatStoreProductItemsGetResponseData>;
    getWithHttpInfo(request: WechatStoreProductItemsApiGetRequest): Promise<ApiResponse<WechatStoreProductItemsGetResponseData>>;
}
