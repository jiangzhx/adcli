import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresSearchInfoGetResponseData } from "../models";
export interface V3LocalStoresSearchInfoApiGetRequest {
    accountId: number | string;
    keyWord: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class V3LocalStoresSearchInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LocalStoresSearchInfoApiGetRequest): Promise<LocalStoresSearchInfoGetResponseData>;
    getWithHttpInfo(request: V3LocalStoresSearchInfoApiGetRequest): Promise<ApiResponse<LocalStoresSearchInfoGetResponseData>>;
}
