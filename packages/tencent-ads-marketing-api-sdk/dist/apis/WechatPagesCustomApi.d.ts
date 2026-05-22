import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCustomAddRequest, WechatPagesCustomAddResponseData } from "../models";
export interface WechatPagesCustomApiAddRequest {
    data: WechatPagesCustomAddRequest;
}
export declare class WechatPagesCustomApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatPagesCustomApiAddRequest): Promise<WechatPagesCustomAddResponseData>;
    addWithHttpInfo(request: WechatPagesCustomApiAddRequest): Promise<ApiResponse<WechatPagesCustomAddResponseData>>;
}
