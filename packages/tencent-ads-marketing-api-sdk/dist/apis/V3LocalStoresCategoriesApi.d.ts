import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresCategoriesGetResponseData } from "../models";
export interface V3LocalStoresCategoriesApiGetRequest {
    verticalId?: number | string;
    fields?: unknown;
}
export declare class V3LocalStoresCategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3LocalStoresCategoriesApiGetRequest): Promise<LocalStoresCategoriesGetResponseData>;
    getWithHttpInfo(request: V3LocalStoresCategoriesApiGetRequest): Promise<ApiResponse<LocalStoresCategoriesGetResponseData>>;
}
