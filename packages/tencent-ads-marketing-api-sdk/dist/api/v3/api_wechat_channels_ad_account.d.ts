import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountAddRequest, WechatChannelsAdAccountAddResponseData, WechatChannelsAdAccountDeleteRequest, WechatChannelsAdAccountDeleteResponseData, WechatChannelsAdAccountGetResponseData, WechatChannelsAdAccountUpdateRequest, WechatChannelsAdAccountUpdateResponseData } from "../../model/v3/index";
export interface WechatChannelsAdAccountApiAddRequest {
    data: WechatChannelsAdAccountAddRequest;
}
export interface WechatChannelsAdAccountApiDeleteRequest {
    data: WechatChannelsAdAccountDeleteRequest;
}
export interface WechatChannelsAdAccountApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface WechatChannelsAdAccountApiUpdateRequest {
    data: WechatChannelsAdAccountUpdateRequest;
}
export declare class WechatChannelsAdAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatChannelsAdAccountApiAddRequest): Promise<WechatChannelsAdAccountAddResponseData>;
    addWithHttpInfo(request: WechatChannelsAdAccountApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountAddResponseData>>;
    delete(request: WechatChannelsAdAccountApiDeleteRequest): Promise<WechatChannelsAdAccountDeleteResponseData>;
    deleteWithHttpInfo(request: WechatChannelsAdAccountApiDeleteRequest): Promise<ApiResponse<WechatChannelsAdAccountDeleteResponseData>>;
    get(request: WechatChannelsAdAccountApiGetRequest): Promise<WechatChannelsAdAccountGetResponseData>;
    getWithHttpInfo(request: WechatChannelsAdAccountApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountGetResponseData>>;
    update(request: WechatChannelsAdAccountApiUpdateRequest): Promise<WechatChannelsAdAccountUpdateResponseData>;
    updateWithHttpInfo(request: WechatChannelsAdAccountApiUpdateRequest): Promise<ApiResponse<WechatChannelsAdAccountUpdateResponseData>>;
}
