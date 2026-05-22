// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_product_catalogs.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductCatalogsAddRequest, ProductCatalogsAddResponseData, ProductCatalogsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProductCatalogsApiAddRequest {
  data: ProductCatalogsAddRequest;
}

export interface ProductCatalogsApiGetRequest {
  accountId: number | string;
  catalogId?: number | string;
  catalogName?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class ProductCatalogsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProductCatalogsApiAddRequest): Promise<ProductCatalogsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProductCatalogsApiAddRequest): Promise<ApiResponse<ProductCatalogsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProductCatalogsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_catalogs/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProductCatalogsApiGetRequest): Promise<ProductCatalogsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductCatalogsApiGetRequest): Promise<ApiResponse<ProductCatalogsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductCatalogsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_catalogs/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "catalog_id", value: request.catalogId },
        { name: "catalog_name", value: request.catalogName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


