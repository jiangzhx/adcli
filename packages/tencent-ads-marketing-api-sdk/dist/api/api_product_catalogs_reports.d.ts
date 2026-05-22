import { ApiClient, type ApiResponse } from "./client";
import type { ProductCatalogsReportsGetResponseData, ReportDateRange } from "../model/index";
export interface ProductCatalogsReportsApiGetRequest {
    accountId: number | string;
    productCatalogId: number | string;
    dateRange: ReportDateRange;
    filtering?: unknown;
    groupBy?: unknown;
    orderBy?: unknown;
    fields?: unknown;
}
export declare class ProductCatalogsReportsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: ProductCatalogsReportsApiGetRequest): Promise<ProductCatalogsReportsGetResponseData>;
    getWithHttpInfo(request: ProductCatalogsReportsApiGetRequest): Promise<ApiResponse<ProductCatalogsReportsGetResponseData>>;
}
