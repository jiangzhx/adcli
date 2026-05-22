import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgroupStatusUpdateRequest } from "../models";
export interface V3WechatPagesCsgroupStatusApiUpdateRequest {
    data: WechatPagesCsgroupStatusUpdateRequest;
}
export declare class V3WechatPagesCsgroupStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    update(request: V3WechatPagesCsgroupStatusApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3WechatPagesCsgroupStatusApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
