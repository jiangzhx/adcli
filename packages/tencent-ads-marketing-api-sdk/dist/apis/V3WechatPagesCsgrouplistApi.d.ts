import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgrouplistAddRequest, WechatPagesCsgrouplistGetResponseData, WechatPagesCsgrouplistUpdateRequest } from "../models";
export interface V3WechatPagesCsgrouplistApiAddRequest {
    data: WechatPagesCsgrouplistAddRequest;
}
export interface V3WechatPagesCsgrouplistApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    corpId?: string;
    fields?: unknown;
}
export interface V3WechatPagesCsgrouplistApiUpdateRequest {
    data: WechatPagesCsgrouplistUpdateRequest;
}
export declare class V3WechatPagesCsgrouplistApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatPagesCsgrouplistApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: V3WechatPagesCsgrouplistApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: V3WechatPagesCsgrouplistApiGetRequest): Promise<WechatPagesCsgrouplistGetResponseData>;
    getWithHttpInfo(request: V3WechatPagesCsgrouplistApiGetRequest): Promise<ApiResponse<WechatPagesCsgrouplistGetResponseData>>;
    update(request: V3WechatPagesCsgrouplistApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: V3WechatPagesCsgrouplistApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
