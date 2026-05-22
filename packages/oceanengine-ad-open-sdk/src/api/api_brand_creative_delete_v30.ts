// Generated from oceanengine/ad_open_sdk_go api/api_brand_creative_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCreativeDeleteV30Request, BrandCreativeDeleteV30Response } from "../models/index";


export interface BrandCreativeDeleteV30ApiOpenApiV30BrandCreativeDeletePostRequest {
  brandCreativeDeleteV30Request?: BrandCreativeDeleteV30Request;
}

export class BrandCreativeDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeDeletePost(request: BrandCreativeDeleteV30ApiOpenApiV30BrandCreativeDeletePostRequest): Promise<BrandCreativeDeleteV30Response> {
    const response = await this.openApiV30BrandCreativeDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeDeletePostWithHttpInfo(request: BrandCreativeDeleteV30ApiOpenApiV30BrandCreativeDeletePostRequest): Promise<ApiResponse<BrandCreativeDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCreativeDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/creative/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCreativeDeleteV30Request
    });
  }
}


