import { ApiClient, type ApiResponse } from "./client";
import type { WechatChannelsAccountsGetResponseData } from "../../model/v3/index";
export interface WechatChannelsAccountsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    scene?: string;
    fields?: unknown;
}
export declare class WechatChannelsAccountsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatChannelsAccountsApiGetRequest): Promise<WechatChannelsAccountsGetResponseData>;
    getWithHttpInfo(request: WechatChannelsAccountsApiGetRequest): Promise<ApiResponse<WechatChannelsAccountsGetResponseData>>;
}
