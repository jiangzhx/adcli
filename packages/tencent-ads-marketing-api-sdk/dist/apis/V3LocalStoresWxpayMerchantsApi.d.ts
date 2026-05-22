import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresWxpayMerchantsGetResponseData } from "../models";
export interface V3LocalStoresWxpayMerchantsApiGetRequest {
    accountId: number | string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3LocalStoresWxpayMerchantsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LocalStoresWxpayMerchantsApiGetRequest): Promise<LocalStoresWxpayMerchantsGetResponseData>;
    getWithHttpInfo(request: V3LocalStoresWxpayMerchantsApiGetRequest): Promise<ApiResponse<LocalStoresWxpayMerchantsGetResponseData>>;
}
