import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesCsgroupUserGetResponseData } from "../model/index";
export interface WechatPagesCsgroupUserApiGetRequest {
    accountId: number | string;
    corpId: string;
    departmentId?: number | string;
    fields?: unknown;
}
export declare class WechatPagesCsgroupUserApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatPagesCsgroupUserApiGetRequest): Promise<WechatPagesCsgroupUserGetResponseData>;
    getWithHttpInfo(request: WechatPagesCsgroupUserApiGetRequest): Promise<ApiResponse<WechatPagesCsgroupUserGetResponseData>>;
}
