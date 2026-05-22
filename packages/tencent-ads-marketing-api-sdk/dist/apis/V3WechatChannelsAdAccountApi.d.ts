import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountAddRequest, WechatChannelsAdAccountAddResponseData, WechatChannelsAdAccountDeleteRequest, WechatChannelsAdAccountDeleteResponseData, WechatChannelsAdAccountGetResponseData, WechatChannelsAdAccountUpdateRequest, WechatChannelsAdAccountUpdateResponseData } from "../models";
export interface V3WechatChannelsAdAccountApiAddRequest {
    data: WechatChannelsAdAccountAddRequest;
}
export interface V3WechatChannelsAdAccountApiDeleteRequest {
    data: WechatChannelsAdAccountDeleteRequest;
}
export interface V3WechatChannelsAdAccountApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export interface V3WechatChannelsAdAccountApiUpdateRequest {
    data: WechatChannelsAdAccountUpdateRequest;
}
export declare class V3WechatChannelsAdAccountApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatChannelsAdAccountApiAddRequest): Promise<WechatChannelsAdAccountAddResponseData>;
    addWithHttpInfo(request: V3WechatChannelsAdAccountApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountAddResponseData>>;
    delete(request: V3WechatChannelsAdAccountApiDeleteRequest): Promise<WechatChannelsAdAccountDeleteResponseData>;
    deleteWithHttpInfo(request: V3WechatChannelsAdAccountApiDeleteRequest): Promise<ApiResponse<WechatChannelsAdAccountDeleteResponseData>>;
    get(request: V3WechatChannelsAdAccountApiGetRequest): Promise<WechatChannelsAdAccountGetResponseData>;
    getWithHttpInfo(request: V3WechatChannelsAdAccountApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountGetResponseData>>;
    update(request: V3WechatChannelsAdAccountApiUpdateRequest): Promise<WechatChannelsAdAccountUpdateResponseData>;
    updateWithHttpInfo(request: V3WechatChannelsAdAccountApiUpdateRequest): Promise<ApiResponse<WechatChannelsAdAccountUpdateResponseData>>;
}
