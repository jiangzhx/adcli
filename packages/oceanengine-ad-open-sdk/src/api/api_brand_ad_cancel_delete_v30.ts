// Generated from oceanengine/ad_open_sdk_go api/api_brand_ad_cancel_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAdCancelDeleteV30Request, BrandAdCancelDeleteV30Response } from "../models/index";


export interface BrandAdCancelDeleteV30ApiOpenApiV30BrandAdCancelDeletePostRequest {
  brandAdCancelDeleteV30Request?: BrandAdCancelDeleteV30Request;
}

export class BrandAdCancelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdCancelDeletePost(request: BrandAdCancelDeleteV30ApiOpenApiV30BrandAdCancelDeletePostRequest): Promise<BrandAdCancelDeleteV30Response> {
    const response = await this.openApiV30BrandAdCancelDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdCancelDeletePostWithHttpInfo(request: BrandAdCancelDeleteV30ApiOpenApiV30BrandAdCancelDeletePostRequest): Promise<ApiResponse<BrandAdCancelDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdCancelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/cancel_delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandAdCancelDeleteV30Request
    });
  }
}


