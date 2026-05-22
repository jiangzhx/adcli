import { ApiClient, type ApiResponse } from "./client";
export interface WechatShopAuthorizationValidationApiGetRequest {
    accountId: number | string;
    wechatChannelsShopId?: string;
    fields?: unknown;
}
export declare class WechatShopAuthorizationValidationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatShopAuthorizationValidationApiGetRequest): Promise<unknown>;
    getWithHttpInfo(request: WechatShopAuthorizationValidationApiGetRequest): Promise<ApiResponse<unknown>>;
}
