import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CategoriesGetResponseData } from "../models";
export interface V3CategoriesApiGetRequest {
    verticalId: number | string;
    page: number;
    pageSize: number;
    level?: number;
    categoryId?: number | string;
    categoryName?: string;
    fields?: unknown;
}
export declare class V3CategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3CategoriesApiGetRequest): Promise<CategoriesGetResponseData>;
    getWithHttpInfo(request: V3CategoriesApiGetRequest): Promise<ApiResponse<CategoriesGetResponseData>>;
}
