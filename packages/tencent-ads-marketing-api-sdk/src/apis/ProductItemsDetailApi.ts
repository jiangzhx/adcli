// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsDetailGetResponseData } from "../models";

export interface ProductItemsDetailApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  productOuterId: string;
  fields?: unknown;
}


export class ProductItemsDetailApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProductItemsDetailApiGetRequest): Promise<ProductItemsDetailGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductItemsDetailApiGetRequest): Promise<ApiResponse<ProductItemsDetailGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.productOuterId == null) {
      throw new ApiException("Missing the required parameter 'productOuterId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProductItemsDetailGetResponseData>({
      method: "GET",
      path: "/product_items_detail/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "product_outer_id", value: request.productOuterId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


