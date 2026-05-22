import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatShopGetResponseData } from "../models";
export interface V3WechatShopApiGetRequest {
    accountId: number | string;
    wechatChannelsShopName?: string;
    wechatChannelsShopId?: string;
    fields?: unknown;
}
export declare class V3WechatShopApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatShopApiGetRequest): Promise<WechatShopGetResponseData>;
    getWithHttpInfo(request: V3WechatShopApiGetRequest): Promise<ApiResponse<WechatShopGetResponseData>>;
}
