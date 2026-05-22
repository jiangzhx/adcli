// Generated from oceanengine/ad_open_sdk_go api/api_brand_ad_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandAdDeleteV30Request, BrandAdDeleteV30Response } from "../models/index";


export interface BrandAdDeleteV30ApiOpenApiV30BrandAdDeletePostRequest {
  brandAdDeleteV30Request?: BrandAdDeleteV30Request;
}

export class BrandAdDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandAdDeletePost(request: BrandAdDeleteV30ApiOpenApiV30BrandAdDeletePostRequest): Promise<BrandAdDeleteV30Response> {
    const response = await this.openApiV30BrandAdDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdDeletePostWithHttpInfo(request: BrandAdDeleteV30ApiOpenApiV30BrandAdDeletePostRequest): Promise<ApiResponse<BrandAdDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandAdDeleteV30Request
    });
  }
}


