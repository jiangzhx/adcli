import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresSearchInfoGetResponseData } from "../models";
export interface LocalStoresSearchInfoApiGetRequest {
    accountId: number | string;
    keyWord: string;
    page?: number;
    pageSize?: number;
    fields?: unknown;
}
export declare class LocalStoresSearchInfoApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LocalStoresSearchInfoApiGetRequest): Promise<LocalStoresSearchInfoGetResponseData>;
    getWithHttpInfo(request: LocalStoresSearchInfoApiGetRequest): Promise<ApiResponse<LocalStoresSearchInfoGetResponseData>>;
}
