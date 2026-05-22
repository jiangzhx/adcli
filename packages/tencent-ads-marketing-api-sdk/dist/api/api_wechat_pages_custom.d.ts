import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesCustomAddRequest, WechatPagesCustomAddResponseData } from "../model/index";
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
