import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAdAccountValidationGetResponseData } from "../../model/v3/index";
export interface WechatChannelsAdAccountValidationApiGetRequest {
    accountId: number | string;
    nickname?: string;
    headImageId?: string;
    wechatChannelsAccountId?: string;
    fields?: unknown;
}
export declare class WechatChannelsAdAccountValidationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatChannelsAdAccountValidationApiGetRequest): Promise<WechatChannelsAdAccountValidationGetResponseData>;
    getWithHttpInfo(request: WechatChannelsAdAccountValidationApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountValidationGetResponseData>>;
}
