import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesAddRequest, WechatPagesAddResponseData, WechatPagesDeleteRequest, WechatPagesDeleteResponseData, WechatPagesGetResponseData } from "../models";
export interface V3WechatPagesApiAddRequest {
    data: WechatPagesAddRequest;
}
export interface V3WechatPagesApiDeleteRequest {
    data: WechatPagesDeleteRequest;
}
export interface V3WechatPagesApiGetRequest {
    accountId: number | string;
    ownerUid?: number;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatPagesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatPagesApiAddRequest): Promise<WechatPagesAddResponseData>;
    addWithHttpInfo(request: V3WechatPagesApiAddRequest): Promise<ApiResponse<WechatPagesAddResponseData>>;
    delete(request: V3WechatPagesApiDeleteRequest): Promise<WechatPagesDeleteResponseData>;
    deleteWithHttpInfo(request: V3WechatPagesApiDeleteRequest): Promise<ApiResponse<WechatPagesDeleteResponseData>>;
    get(request: V3WechatPagesApiGetRequest): Promise<WechatPagesGetResponseData>;
    getWithHttpInfo(request: V3WechatPagesApiGetRequest): Promise<ApiResponse<WechatPagesGetResponseData>>;
}
