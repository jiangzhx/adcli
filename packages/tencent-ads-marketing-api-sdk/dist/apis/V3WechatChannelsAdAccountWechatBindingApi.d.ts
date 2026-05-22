import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountWechatBindingAddRequest, WechatChannelsAdAccountWechatBindingAddResponseData, WechatChannelsAdAccountWechatBindingGetResponseData } from "../models";
export interface V3WechatChannelsAdAccountWechatBindingApiAddRequest {
    data: WechatChannelsAdAccountWechatBindingAddRequest;
}
export interface V3WechatChannelsAdAccountWechatBindingApiGetRequest {
    accountId: number | string;
    wechatBindAuthToken: string;
    fields?: unknown;
}
export declare class V3WechatChannelsAdAccountWechatBindingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: V3WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<WechatChannelsAdAccountWechatBindingAddResponseData>;
    addWithHttpInfo(request: V3WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingAddResponseData>>;
    get(request: V3WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<WechatChannelsAdAccountWechatBindingGetResponseData>;
    getWithHttpInfo(request: V3WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingGetResponseData>>;
}
