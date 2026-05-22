import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesCsgrouplistAddRequest, WechatPagesCsgrouplistGetResponseData, WechatPagesCsgrouplistUpdateRequest } from "../model/index";
export interface WechatPagesCsgrouplistApiAddRequest {
    data: WechatPagesCsgrouplistAddRequest;
}
export interface WechatPagesCsgrouplistApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    corpId?: string;
    fields?: unknown;
}
export interface WechatPagesCsgrouplistApiUpdateRequest {
    data: WechatPagesCsgrouplistUpdateRequest;
}
export declare class WechatPagesCsgrouplistApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatPagesCsgrouplistApiAddRequest): Promise<unknown>;
    addWithHttpInfo(request: WechatPagesCsgrouplistApiAddRequest): Promise<ApiResponse<unknown>>;
    get(request: WechatPagesCsgrouplistApiGetRequest): Promise<WechatPagesCsgrouplistGetResponseData>;
    getWithHttpInfo(request: WechatPagesCsgrouplistApiGetRequest): Promise<ApiResponse<WechatPagesCsgrouplistGetResponseData>>;
    update(request: WechatPagesCsgrouplistApiUpdateRequest): Promise<unknown>;
    updateWithHttpInfo(request: WechatPagesCsgrouplistApiUpdateRequest): Promise<ApiResponse<unknown>>;
}
