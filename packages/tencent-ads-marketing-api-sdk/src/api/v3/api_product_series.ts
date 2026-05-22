// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_product_series.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductSeriesAddRequest, ProductSeriesAddResponseData, ProductSeriesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProductSeriesApiAddRequest {
  data: ProductSeriesAddRequest;
}

export interface ProductSeriesApiGetRequest {
  accountId: number | string;
  catalogId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class ProductSeriesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProductSeriesApiAddRequest): Promise<ProductSeriesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProductSeriesApiAddRequest): Promise<ApiResponse<ProductSeriesAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProductSeriesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_series/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProductSeriesApiGetRequest): Promise<ProductSeriesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductSeriesApiGetRequest): Promise<ApiResponse<ProductSeriesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.catalogId == null) {
      throw new ApiException("Missing the required parameter 'catalogId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductSeriesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_series/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "catalog_id", value: request.catalogId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


