import { ApiClient, type ApiResponse } from "./client";
import type { WechatShopGetResponseData } from "../../model/v3/index";
export interface WechatShopApiGetRequest {
    accountId: number | string;
    wechatChannelsShopName?: string;
    wechatChannelsShopId?: string;
    fields?: unknown;
}
export declare class WechatShopApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatShopApiGetRequest): Promise<WechatShopGetResponseData>;
    getWithHttpInfo(request: WechatShopApiGetRequest): Promise<ApiResponse<WechatShopGetResponseData>>;
}
