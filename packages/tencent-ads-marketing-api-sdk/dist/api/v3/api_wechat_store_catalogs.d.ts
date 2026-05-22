import { ApiClient, type ApiResponse } from "./client";
import type { WechatStoreCatalogsGetResponseData } from "../../model/v3/index";
export interface WechatStoreCatalogsApiGetRequest {
    accountId: number | string;
    storeIds?: unknown;
    catalogIds?: unknown;
    catalogName?: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class WechatStoreCatalogsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: WechatStoreCatalogsApiGetRequest): Promise<WechatStoreCatalogsGetResponseData>;
    getWithHttpInfo(request: WechatStoreCatalogsApiGetRequest): Promise<ApiResponse<WechatStoreCatalogsGetResponseData>>;
}
