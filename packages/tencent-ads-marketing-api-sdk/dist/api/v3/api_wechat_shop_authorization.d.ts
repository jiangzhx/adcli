import { ApiClient, type ApiResponse } from "./client";
import type { WechatShopAuthorizationAddRequest, WechatShopAuthorizationAddResponseData, WechatShopAuthorizationGetResponseData } from "../../model/v3/index";
export interface WechatShopAuthorizationApiAddRequest {
    data: WechatShopAuthorizationAddRequest;
}
export interface WechatShopAuthorizationApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatShopAuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatShopAuthorizationApiAddRequest): Promise<WechatShopAuthorizationAddResponseData>;
    addWithHttpInfo(request: WechatShopAuthorizationApiAddRequest): Promise<ApiResponse<WechatShopAuthorizationAddResponseData>>;
    get(request: WechatShopAuthorizationApiGetRequest): Promise<WechatShopAuthorizationGetResponseData>;
    getWithHttpInfo(request: WechatShopAuthorizationApiGetRequest): Promise<ApiResponse<WechatShopAuthorizationGetResponseData>>;
}
