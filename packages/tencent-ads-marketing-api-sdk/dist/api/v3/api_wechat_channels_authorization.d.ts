import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAuthorizationAddRequest, WechatChannelsAuthorizationAddResponseData, WechatChannelsAuthorizationDeleteRequest, WechatChannelsAuthorizationDeleteResponseData, WechatChannelsAuthorizationGetResponseData, WechatChannelsAuthorizationUpdateRequest, WechatChannelsAuthorizationUpdateResponseData } from "../../model/v3/index";
export interface WechatChannelsAuthorizationApiAddRequest {
    data: WechatChannelsAuthorizationAddRequest;
}
export interface WechatChannelsAuthorizationApiDeleteRequest {
    data: WechatChannelsAuthorizationDeleteRequest;
}
export interface WechatChannelsAuthorizationApiGetRequest {
    accountId: number | string;
    wechatChannelsAccountName?: string;
    page?: number;
    pageSize?: number;
    filtering?: unknown;
    fields?: unknown;
}
export interface WechatChannelsAuthorizationApiUpdateRequest {
    data: WechatChannelsAuthorizationUpdateRequest;
}
export declare class WechatChannelsAuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatChannelsAuthorizationApiAddRequest): Promise<WechatChannelsAuthorizationAddResponseData>;
    addWithHttpInfo(request: WechatChannelsAuthorizationApiAddRequest): Promise<ApiResponse<WechatChannelsAuthorizationAddResponseData>>;
    delete(request: WechatChannelsAuthorizationApiDeleteRequest): Promise<WechatChannelsAuthorizationDeleteResponseData>;
    deleteWithHttpInfo(request: WechatChannelsAuthorizationApiDeleteRequest): Promise<ApiResponse<WechatChannelsAuthorizationDeleteResponseData>>;
    get(request: WechatChannelsAuthorizationApiGetRequest): Promise<WechatChannelsAuthorizationGetResponseData>;
    getWithHttpInfo(request: WechatChannelsAuthorizationApiGetRequest): Promise<ApiResponse<WechatChannelsAuthorizationGetResponseData>>;
    update(request: WechatChannelsAuthorizationApiUpdateRequest): Promise<WechatChannelsAuthorizationUpdateResponseData>;
    updateWithHttpInfo(request: WechatChannelsAuthorizationApiUpdateRequest): Promise<ApiResponse<WechatChannelsAuthorizationUpdateResponseData>>;
}
