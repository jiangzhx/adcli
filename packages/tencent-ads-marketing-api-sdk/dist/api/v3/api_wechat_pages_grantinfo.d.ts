import { ApiClient, type ApiResponse } from "./client";
import type { WechatPagesGrantinfoGetResponseData } from "../../model/v3/index";
export interface WechatPagesGrantinfoApiGetRequest {
    accountId: number | string;
    searchKey?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatPagesGrantinfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatPagesGrantinfoApiGetRequest): Promise<WechatPagesGrantinfoGetResponseData>;
    getWithHttpInfo(request: WechatPagesGrantinfoApiGetRequest): Promise<ApiResponse<WechatPagesGrantinfoGetResponseData>>;
}
