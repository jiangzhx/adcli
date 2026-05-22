import { ApiClient, type ApiResponse } from "./client";
import type { CategoriesAttributeGetResponseData } from "../../model/v3/index";
export interface CategoriesAttributeApiGetRequest {
    verticalId: number | string;
    page: number;
    pageSize: number;
    lastCategoryIdList?: unknown;
    fields?: unknown;
}
export declare class CategoriesAttributeApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: CategoriesAttributeApiGetRequest): Promise<CategoriesAttributeGetResponseData>;
    getWithHttpInfo(request: CategoriesAttributeApiGetRequest): Promise<ApiResponse<CategoriesAttributeGetResponseData>>;
}
