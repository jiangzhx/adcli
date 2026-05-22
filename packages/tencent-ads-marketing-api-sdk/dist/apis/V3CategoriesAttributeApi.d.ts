import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CategoriesAttributeGetResponseData } from "../models";
export interface V3CategoriesAttributeApiGetRequest {
    verticalId: number | string;
    page: number;
    pageSize: number;
    lastCategoryIdList?: unknown;
    fields?: unknown;
}
export declare class V3CategoriesAttributeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CategoriesAttributeApiGetRequest): Promise<CategoriesAttributeGetResponseData>;
    getWithHttpInfo(request: V3CategoriesAttributeApiGetRequest): Promise<ApiResponse<CategoriesAttributeGetResponseData>>;
}
