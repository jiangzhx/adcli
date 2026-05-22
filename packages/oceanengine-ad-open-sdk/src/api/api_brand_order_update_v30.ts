// Generated from oceanengine/ad_open_sdk_go api/api_brand_order_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandOrderUpdateV30Request, BrandOrderUpdateV30Response } from "../models/index";


export interface BrandOrderUpdateV30ApiOpenApiV30BrandOrderUpdatePostRequest {
  brandOrderUpdateV30Request?: BrandOrderUpdateV30Request;
}

export class BrandOrderUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderUpdatePost(request: BrandOrderUpdateV30ApiOpenApiV30BrandOrderUpdatePostRequest): Promise<BrandOrderUpdateV30Response> {
    const response = await this.openApiV30BrandOrderUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderUpdatePostWithHttpInfo(request: BrandOrderUpdateV30ApiOpenApiV30BrandOrderUpdatePostRequest): Promise<ApiResponse<BrandOrderUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandOrderUpdateV30Request
    });
  }
}


