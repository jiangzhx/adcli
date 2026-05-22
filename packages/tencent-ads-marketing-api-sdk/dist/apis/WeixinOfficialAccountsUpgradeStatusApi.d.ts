import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../models";
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
