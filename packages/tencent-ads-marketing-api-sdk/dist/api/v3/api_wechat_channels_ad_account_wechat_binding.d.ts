import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountWechatBindingAddRequest, WechatChannelsAdAccountWechatBindingAddResponseData, WechatChannelsAdAccountWechatBindingGetResponseData } from "../../model/v3/index";
export interface WechatChannelsAdAccountWechatBindingApiAddRequest {
    data: WechatChannelsAdAccountWechatBindingAddRequest;
}
export interface WechatChannelsAdAccountWechatBindingApiGetRequest {
    accountId: number | string;
    wechatBindAuthToken: string;
    fields?: unknown;
}
export declare class WechatChannelsAdAccountWechatBindingApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    add(request: WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<WechatChannelsAdAccountWechatBindingAddResponseData>;
    addWithHttpInfo(request: WechatChannelsAdAccountWechatBindingApiAddRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingAddResponseData>>;
    get(request: WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<WechatChannelsAdAccountWechatBindingGetResponseData>;
    getWithHttpInfo(request: WechatChannelsAdAccountWechatBindingApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountWechatBindingGetResponseData>>;
}
