import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatChannelsAccountsGetResponseData } from "../models";
export interface V3WechatChannelsAccountsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    scene?: string;
    fields?: unknown;
}
export declare class V3WechatChannelsAccountsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatChannelsAccountsApiGetRequest): Promise<WechatChannelsAccountsGetResponseData>;
    getWithHttpInfo(request: V3WechatChannelsAccountsApiGetRequest): Promise<ApiResponse<WechatChannelsAccountsGetResponseData>>;
}
