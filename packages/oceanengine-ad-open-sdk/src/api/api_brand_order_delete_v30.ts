// Generated from oceanengine/ad_open_sdk_go api/api_brand_order_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandOrderDeleteV30Request, BrandOrderDeleteV30Response } from "../models/index";


export interface BrandOrderDeleteV30ApiOpenApiV30BrandOrderDeletePostRequest {
  brandOrderDeleteV30Request?: BrandOrderDeleteV30Request;
}

export class BrandOrderDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderDeletePost(request: BrandOrderDeleteV30ApiOpenApiV30BrandOrderDeletePostRequest): Promise<BrandOrderDeleteV30Response> {
    const response = await this.openApiV30BrandOrderDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderDeletePostWithHttpInfo(request: BrandOrderDeleteV30ApiOpenApiV30BrandOrderDeletePostRequest): Promise<ApiResponse<BrandOrderDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandOrderDeleteV30Request
    });
  }
}


