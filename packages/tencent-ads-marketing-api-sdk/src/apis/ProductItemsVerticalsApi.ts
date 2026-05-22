// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProductItemsVerticalsGetResponseData } from "../models";

export interface ProductItemsVerticalsApiGetRequest {
  fields?: unknown;
}


export class ProductItemsVerticalsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProductItemsVerticalsApiGetRequest): Promise<ProductItemsVerticalsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProductItemsVerticalsApiGetRequest): Promise<ApiResponse<ProductItemsVerticalsGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<ProductItemsVerticalsGetResponseData>({
      method: "GET",
      path: "/product_items_verticals/get",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


