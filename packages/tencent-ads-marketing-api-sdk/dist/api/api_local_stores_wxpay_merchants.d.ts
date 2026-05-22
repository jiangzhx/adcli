import { ApiClient, type ApiResponse } from "./client";
import type { LocalStoresWxpayMerchantsGetResponseData } from "../model/index";
export interface LocalStoresWxpayMerchantsApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class LocalStoresWxpayMerchantsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LocalStoresWxpayMerchantsApiGetRequest): Promise<LocalStoresWxpayMerchantsGetResponseData>;
    getWithHttpInfo(request: LocalStoresWxpayMerchantsApiGetRequest): Promise<ApiResponse<LocalStoresWxpayMerchantsGetResponseData>>;
}
