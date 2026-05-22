import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgroupStatusUpdateRequest } from "../models";
export interface WechatPagesCsgroupStatusApiUpdateRequest {
    data: WechatPagesCsgroupStatusUpdateRequest;
}
export declare class WechatPagesCsgroupStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: WechatPagesCsgroupStatusApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: WechatPagesCsgroupStatusApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
