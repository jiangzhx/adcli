import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopAuthorizationAddRequest, WechatShopAuthorizationAddResponseData, WechatShopAuthorizationGetResponseData } from "../models";
export interface V3WechatShopAuthorizationApiAddRequest {
    data: WechatShopAuthorizationAddRequest;
}
export interface V3WechatShopAuthorizationApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatShopAuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatShopAuthorizationApiAddRequest): Promise<WechatShopAuthorizationAddResponseData>;
    addWithHttpInfo(request: V3WechatShopAuthorizationApiAddRequest): Promise<ApiResponse<WechatShopAuthorizationAddResponseData>>;
    get(request: V3WechatShopAuthorizationApiGetRequest): Promise<WechatShopAuthorizationGetResponseData>;
    getWithHttpInfo(request: V3WechatShopAuthorizationApiGetRequest): Promise<ApiResponse<WechatShopAuthorizationGetResponseData>>;
}
