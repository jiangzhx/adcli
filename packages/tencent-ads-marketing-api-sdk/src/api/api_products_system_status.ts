// Generated from tencentad/marketing-api-go-sdk pkg/api/api_products_system_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductsSystemStatusGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface ProductsSystemStatusApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  feedId?: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class ProductsSystemStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProductsSystemStatusApiGetRequest): Promise<ProductsSystemStatusGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductsSystemStatusApiGetRequest): Promise<ApiResponse<ProductsSystemStatusGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductsSystemStatusGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/products_system_status/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "feed_id", value: request.feedId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


