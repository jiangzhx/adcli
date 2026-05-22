import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopAuthorizationStatusUpdateRequest, WechatShopAuthorizationStatusUpdateResponseData } from "../models";
export interface V3WechatShopAuthorizationStatusApiUpdateRequest {
    data: WechatShopAuthorizationStatusUpdateRequest;
}
export declare class V3WechatShopAuthorizationStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3WechatShopAuthorizationStatusApiUpdateRequest): Promise<WechatShopAuthorizationStatusUpdateResponseData>;
    updateWithHttpInfo(request: V3WechatShopAuthorizationStatusApiUpdateRequest): Promise<ApiResponse<WechatShopAuthorizationStatusUpdateResponseData>>;
}
