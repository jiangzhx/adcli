import { ApiClient, type ApiResponse } from "./client";
import type { LocalStoresCategoriesGetResponseData } from "../../model/v3/index";
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
