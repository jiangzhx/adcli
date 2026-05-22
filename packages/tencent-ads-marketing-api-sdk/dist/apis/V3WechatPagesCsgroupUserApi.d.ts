import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgroupUserGetResponseData } from "../models";
export interface V3WechatPagesCsgroupUserApiGetRequest {
    accountId: number | string;
    corpId: string;
    departmentId?: number | string;
    fields?: unknown;
}
export declare class V3WechatPagesCsgroupUserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatPagesCsgroupUserApiGetRequest): Promise<WechatPagesCsgroupUserGetResponseData>;
    getWithHttpInfo(request: V3WechatPagesCsgroupUserApiGetRequest): Promise<ApiResponse<WechatPagesCsgroupUserGetResponseData>>;
}
