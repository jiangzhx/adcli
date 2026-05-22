import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatOfficialAccountsGetResponseData } from "../models";
export interface V3WechatOfficialAccountsApiGetRequest {
    accountId: number | string;
    filtering?: unknown;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatOfficialAccountsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatOfficialAccountsApiGetRequest): Promise<WechatOfficialAccountsGetResponseData>;
    getWithHttpInfo(request: V3WechatOfficialAccountsApiGetRequest): Promise<ApiResponse<WechatOfficialAccountsGetResponseData>>;
}
