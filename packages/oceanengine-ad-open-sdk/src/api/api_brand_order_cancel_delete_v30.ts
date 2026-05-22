// Generated from oceanengine/ad_open_sdk_go api/api_brand_order_cancel_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandOrderCancelDeleteV30Request, BrandOrderCancelDeleteV30Response } from "../models/index";


export interface BrandOrderCancelDeleteV30ApiOpenApiV30BrandOrderCancelDeletePostRequest {
  brandOrderCancelDeleteV30Request?: BrandOrderCancelDeleteV30Request;
}

export class BrandOrderCancelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderCancelDeletePost(request: BrandOrderCancelDeleteV30ApiOpenApiV30BrandOrderCancelDeletePostRequest): Promise<BrandOrderCancelDeleteV30Response> {
    const response = await this.openApiV30BrandOrderCancelDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderCancelDeletePostWithHttpInfo(request: BrandOrderCancelDeleteV30ApiOpenApiV30BrandOrderCancelDeletePostRequest): Promise<ApiResponse<BrandOrderCancelDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderCancelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/cancel_delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandOrderCancelDeleteV30Request
    });
  }
}


