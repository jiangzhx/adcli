// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_product_categories_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductCategoriesListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProductCategoriesListApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  page: number;
  pageSize: number;
  level?: number;
  categoryId?: number | string;
  categoryName?: string;
  fields?: unknown;
}


export class ProductCategoriesListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProductCategoriesListApiGetRequest): Promise<ProductCategoriesListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductCategoriesListApiGetRequest): Promise<ApiResponse<ProductCategoriesListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductCategoriesListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_categories_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "level", value: request.level },
        { name: "category_id", value: request.categoryId },
        { name: "category_name", value: request.categoryName },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


