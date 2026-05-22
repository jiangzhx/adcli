import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesAddRequest, WechatPagesAddResponseData, WechatPagesDeleteRequest, WechatPagesDeleteResponseData, WechatPagesGetResponseData } from "../model/index";
export interface WechatPagesApiAddRequest {
    data: WechatPagesAddRequest;
}
export interface WechatPagesApiDeleteRequest {
    data: WechatPagesDeleteRequest;
}
export interface WechatPagesApiGetRequest {
    accountId: number | string;
    ownerUid?: number;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatPagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatPagesApiAddRequest): Promise<WechatPagesAddResponseData>;
    addWithHttpInfo(request: WechatPagesApiAddRequest): Promise<ApiResponse<WechatPagesAddResponseData>>;
    delete(request: WechatPagesApiDeleteRequest): Promise<WechatPagesDeleteResponseData>;
    deleteWithHttpInfo(request: WechatPagesApiDeleteRequest): Promise<ApiResponse<WechatPagesDeleteResponseData>>;
    get(request: WechatPagesApiGetRequest): Promise<WechatPagesGetResponseData>;
    getWithHttpInfo(request: WechatPagesApiGetRequest): Promise<ApiResponse<WechatPagesGetResponseData>>;
}
