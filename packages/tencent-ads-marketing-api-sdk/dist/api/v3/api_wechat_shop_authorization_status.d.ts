import { ApiClient, type ApiResponse } from "./client";
import type { WechatShopAuthorizationStatusUpdateRequest, WechatShopAuthorizationStatusUpdateResponseData } from "../../model/v3/index";
export interface WechatShopAuthorizationStatusApiUpdateRequest {
    data: WechatShopAuthorizationStatusUpdateRequest;
}
export declare class WechatShopAuthorizationStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: WechatShopAuthorizationStatusApiUpdateRequest): Promise<WechatShopAuthorizationStatusUpdateResponseData>;
    updateWithHttpInfo(request: WechatShopAuthorizationStatusApiUpdateRequest): Promise<ApiResponse<WechatShopAuthorizationStatusUpdateResponseData>>;
}
