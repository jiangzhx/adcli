import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatStoreCatalogsGetResponseData } from "../models";
export interface V3WechatStoreCatalogsApiGetRequest {
    accountId: number | string;
    storeIds?: unknown;
    catalogIds?: unknown;
    catalogName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3WechatStoreCatalogsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3WechatStoreCatalogsApiGetRequest): Promise<WechatStoreCatalogsGetResponseData>;
    getWithHttpInfo(request: V3WechatStoreCatalogsApiGetRequest): Promise<ApiResponse<WechatStoreCatalogsGetResponseData>>;
}
