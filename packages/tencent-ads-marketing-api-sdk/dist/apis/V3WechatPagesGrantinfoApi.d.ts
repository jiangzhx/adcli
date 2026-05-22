import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesGrantinfoGetResponseData } from "../models";
export interface V3WechatPagesGrantinfoApiGetRequest {
    accountId: number | string;
    searchKey?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatPagesGrantinfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatPagesGrantinfoApiGetRequest): Promise<WechatPagesGrantinfoGetResponseData>;
    getWithHttpInfo(request: V3WechatPagesGrantinfoApiGetRequest): Promise<ApiResponse<WechatPagesGrantinfoGetResponseData>>;
}
