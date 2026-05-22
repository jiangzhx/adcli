import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
export interface V3WechatShopAuthorizationValidationApiGetRequest {
    accountId: number | string;
    wechatChannelsShopId?: string;
    fields?: unknown;
}
export declare class V3WechatShopAuthorizationValidationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatShopAuthorizationValidationApiGetRequest): Promise<unknown>;
    getWithHttpInfo(request: V3WechatShopAuthorizationValidationApiGetRequest): Promise<ApiResponse<unknown>>;
}
