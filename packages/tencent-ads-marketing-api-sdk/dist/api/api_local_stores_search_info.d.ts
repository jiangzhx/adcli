import { ApiClient, type ApiResponse } from "./client";
import type { LocalStoresSearchInfoGetResponseData } from "../model/index";
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
