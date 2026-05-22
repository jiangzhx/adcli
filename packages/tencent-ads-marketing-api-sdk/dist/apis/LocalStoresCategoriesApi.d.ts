import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresCategoriesGetResponseData } from "../models";
export interface LocalStoresCategoriesApiGetRequest {
    verticalId?: number | string;
    fields?: unknown;
}
export declare class LocalStoresCategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: LocalStoresCategoriesApiGetRequest): Promise<LocalStoresCategoriesGetResponseData>;
    getWithHttpInfo(request: LocalStoresCategoriesApiGetRequest): Promise<ApiResponse<LocalStoresCategoriesGetResponseData>>;
}
