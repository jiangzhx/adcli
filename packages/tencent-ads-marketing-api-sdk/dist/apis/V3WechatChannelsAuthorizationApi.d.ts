import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAuthorizationAddRequest, WechatChannelsAuthorizationAddResponseData, WechatChannelsAuthorizationDeleteRequest, WechatChannelsAuthorizationDeleteResponseData, WechatChannelsAuthorizationGetResponseData, WechatChannelsAuthorizationUpdateRequest, WechatChannelsAuthorizationUpdateResponseData } from "../models";
export interface V3WechatChannelsAuthorizationApiAddRequest {
    data: WechatChannelsAuthorizationAddRequest;
}
export interface V3WechatChannelsAuthorizationApiDeleteRequest {
    data: WechatChannelsAuthorizationDeleteRequest;
}
export interface V3WechatChannelsAuthorizationApiGetRequest {
    accountId: number | string;
    wechatChannelsAccountName?: string;
    page?: number;
    pageSize?: number;
    filtering?: unknown;
    fields?: unknown;
}
export interface V3WechatChannelsAuthorizationApiUpdateRequest {
    data: WechatChannelsAuthorizationUpdateRequest;
}
export declare class V3WechatChannelsAuthorizationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatChannelsAuthorizationApiAddRequest): Promise<WechatChannelsAuthorizationAddResponseData>;
    addWithHttpInfo(request: V3WechatChannelsAuthorizationApiAddRequest): Promise<ApiResponse<WechatChannelsAuthorizationAddResponseData>>;
    delete(request: V3WechatChannelsAuthorizationApiDeleteRequest): Promise<WechatChannelsAuthorizationDeleteResponseData>;
    deleteWithHttpInfo(request: V3WechatChannelsAuthorizationApiDeleteRequest): Promise<ApiResponse<WechatChannelsAuthorizationDeleteResponseData>>;
    get(request: V3WechatChannelsAuthorizationApiGetRequest): Promise<WechatChannelsAuthorizationGetResponseData>;
    getWithHttpInfo(request: V3WechatChannelsAuthorizationApiGetRequest): Promise<ApiResponse<WechatChannelsAuthorizationGetResponseData>>;
    update(request: V3WechatChannelsAuthorizationApiUpdateRequest): Promise<WechatChannelsAuthorizationUpdateResponseData>;
    updateWithHttpInfo(request: V3WechatChannelsAuthorizationApiUpdateRequest): Promise<ApiResponse<WechatChannelsAuthorizationUpdateResponseData>>;
}
