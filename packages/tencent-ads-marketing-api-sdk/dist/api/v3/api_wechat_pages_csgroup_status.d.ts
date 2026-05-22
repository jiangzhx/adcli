import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesCsgroupStatusUpdateRequest } from "../../model/v3/index";
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
