import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCustomAddRequest, WechatPagesCustomAddResponseData } from "../models";
export interface V3WechatPagesCustomApiAddRequest {
    data: WechatPagesCustomAddRequest;
}
export declare class V3WechatPagesCustomApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatPagesCustomApiAddRequest): Promise<WechatPagesCustomAddResponseData>;
    addWithHttpInfo(request: V3WechatPagesCustomApiAddRequest): Promise<ApiResponse<WechatPagesCustomAddResponseData>>;
}
