import { ApiClient, type ApiResponse } from "./client";
import type { CategoriesGetResponseData } from "../../model/v3/index";
export interface CategoriesApiGetRequest {
    verticalId: number | string;
    page: number;
    pageSize: number;
    level?: number;
    categoryId?: number | string;
    categoryName?: string;
    fields?: unknown;
}
export declare class CategoriesApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CategoriesApiGetRequest): Promise<CategoriesGetResponseData>;
    getWithHttpInfo(request: CategoriesApiGetRequest): Promise<ApiResponse<CategoriesGetResponseData>>;
}
