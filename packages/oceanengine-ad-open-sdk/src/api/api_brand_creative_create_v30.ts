// Generated from oceanengine/ad_open_sdk_go api/api_brand_creative_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandCreativeCreateV30Request, BrandCreativeCreateV30Response } from "../models/index";


export interface BrandCreativeCreateV30ApiOpenApiV30BrandCreativeCreatePostRequest {
  brandCreativeCreateV30Request?: BrandCreativeCreateV30Request;
}

export class BrandCreativeCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandCreativeCreatePost(request: BrandCreativeCreateV30ApiOpenApiV30BrandCreativeCreatePostRequest): Promise<BrandCreativeCreateV30Response> {
    const response = await this.openApiV30BrandCreativeCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandCreativeCreatePostWithHttpInfo(request: BrandCreativeCreateV30ApiOpenApiV30BrandCreativeCreatePostRequest): Promise<ApiResponse<BrandCreativeCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandCreativeCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/creative/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.brandCreativeCreateV30Request
    });
  }
}


