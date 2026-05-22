// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsAddRequest, ProductItemsAddResponseData, ProductItemsBatchUpdateRequest, ProductItemsDeleteRequest, ProductItemsGetResponseData, ProductItemsUpdateRequest } from "../models";

export interface V3ProductItemsApiAddRequest {
  data: ProductItemsAddRequest;
}

export interface V3ProductItemsApiBatchUpdateRequest {
  data: ProductItemsBatchUpdateRequest;
}

export interface V3ProductItemsApiDeleteRequest {
  data: ProductItemsDeleteRequest;
}

export interface V3ProductItemsApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  filtering?: unknown;
  fields?: unknown;
}

export interface V3ProductItemsApiUpdateRequest {
  data: ProductItemsUpdateRequest;
}


export class V3ProductItemsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ProductItemsApiAddRequest): Promise<ProductItemsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ProductItemsApiAddRequest): Promise<ApiResponse<ProductItemsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProductItemsAddResponseData>({
      method: "POST",
      path: "/product_items/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async batchUpdate(request: V3ProductItemsApiBatchUpdateRequest): Promise<unknown> {
    const response = await this.batchUpdateWithHttpInfo(request);
    return response.data;
  }

  async batchUpdateWithHttpInfo(request: V3ProductItemsApiBatchUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling batchUpdate");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/product_items/batch_update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3ProductItemsApiDeleteRequest): Promise<unknown> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3ProductItemsApiDeleteRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/product_items/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ProductItemsApiGetRequest): Promise<ProductItemsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProductItemsApiGetRequest): Promise<ApiResponse<ProductItemsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductItemsGetResponseData>({
      method: "GET",
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

  async update(request: V3ProductItemsApiUpdateRequest): Promise<unknown> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ProductItemsApiUpdateRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/product_items/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


