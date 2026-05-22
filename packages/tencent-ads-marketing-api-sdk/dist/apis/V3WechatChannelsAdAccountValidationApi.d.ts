import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAdAccountValidationGetResponseData } from "../models";
export interface V3WechatChannelsAdAccountValidationApiGetRequest {
    accountId: number | string;
    nickname?: string;
    headImageId?: string;
    wechatChannelsAccountId?: string;
    fields?: unknown;
}
export declare class V3WechatChannelsAdAccountValidationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatChannelsAdAccountValidationApiGetRequest): Promise<WechatChannelsAdAccountValidationGetResponseData>;
    getWithHttpInfo(request: V3WechatChannelsAdAccountValidationApiGetRequest): Promise<ApiResponse<WechatChannelsAdAccountValidationGetResponseData>>;
}
