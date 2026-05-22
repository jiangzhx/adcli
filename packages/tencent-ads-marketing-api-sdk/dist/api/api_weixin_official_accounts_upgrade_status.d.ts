import { ApiClient, type ApiResponse } from "./client";
import type { WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../model/index";
export interface WeixinOfficialAccountsUpgradeStatusApiGetRequest {
    accountId: number | string;
    fields?: unknown;
}
export declare class WeixinOfficialAccountsUpgradeStatusApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WeixinOfficialAccountsUpgradeStatusApiGetRequest): Promise<WeixinOfficialAccountsUpgradeStatusGetResponseData>;
    getWithHttpInfo(request: WeixinOfficialAccountsUpgradeStatusApiGetRequest): Promise<ApiResponse<WeixinOfficialAccountsUpgradeStatusGetResponseData>>;
}
