// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_product_items.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductItemsAddRequest, ProductItemsAddResponseData, ProductItemsBatchUpdateRequest, ProductItemsDeleteRequest, ProductItemsGetResponseData, ProductItemsUpdateRequest } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProductItemsApiAddRequest {
  data: ProductItemsAddRequest;
}

export interface ProductItemsApiBatchUpdateRequest {
  data: ProductItemsBatchUpdateRequest;
}

export interface ProductItemsApiDeleteRequest {
  data: ProductItemsDeleteRequest;
}

export interface ProductItemsApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  filtering?: unknown;
  fields?: unknown;
}

export interface ProductItemsApiUpdateRequest {
  data: ProductItemsUpdateRequest;
}


export class ProductItemsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProductItemsApiAddRequest): Promise<ProductItemsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProductItemsApiAddRequest): Promise<ApiResponse<ProductItemsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProductItemsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async batchUpdate(request: ProductItemsApiBatchUpdateRequest): Promise<unknown> {
    const response = await this.batchUpdateWithHttpInfo(request);
    return response.data;
  }

  async batchUpdateWithHttpInfo(request: ProductItemsApiBatchUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling batchUpdate");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items/batch_update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: ProductItemsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ProductItemsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProductItemsApiGetRequest): Promise<ProductItemsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductItemsApiGetRequest): Promise<ApiResponse<ProductItemsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductItemsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: ProductItemsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ProductItemsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


