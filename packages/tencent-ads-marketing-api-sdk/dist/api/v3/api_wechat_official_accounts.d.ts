import { ApiClient, type ApiResponse } from "./client";
import type { WechatOfficialAccountsGetResponseData } from "../../model/v3/index";
export interface WechatOfficialAccountsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatOfficialAccountsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatOfficialAccountsApiGetRequest): Promise<WechatOfficialAccountsGetResponseData>;
    getWithHttpInfo(request: WechatOfficialAccountsApiGetRequest): Promise<ApiResponse<WechatOfficialAccountsGetResponseData>>;
}
