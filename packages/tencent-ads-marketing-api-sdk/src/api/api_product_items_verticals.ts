// Generated from tencentad/marketing-api-go-sdk pkg/api/api_product_items_verticals.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductItemsVerticalsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/product_items_verticals/get",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


