// Generated from tencentad/marketing-api-go-sdk pkg/api/api_product_catalogs_reports.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductCatalogsReportsGetResponseData, ReportDateRange } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface ProductCatalogsReportsApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  dateRange: ReportDateRange;
  filtering?: unknown;
  groupBy?: unknown;
  orderBy?: unknown;
  fields?: unknown;
}


export class ProductCatalogsReportsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProductCatalogsReportsApiGetRequest): Promise<ProductCatalogsReportsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductCatalogsReportsApiGetRequest): Promise<ApiResponse<ProductCatalogsReportsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.dateRange == null) {
      throw new ApiException("Missing the required parameter 'dateRange' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductCatalogsReportsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/product_catalogs_reports/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "date_range", value: request.dateRange },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "group_by", value: request.groupBy, collectionFormat: "multi" },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


