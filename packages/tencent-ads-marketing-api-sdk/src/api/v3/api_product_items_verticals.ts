// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_product_items_verticals.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProductItemsVerticalsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

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
      basePath: TencentAdsV30Configuration.basePath,
      path: "/product_items_verticals/get",
      queryParams: [
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


