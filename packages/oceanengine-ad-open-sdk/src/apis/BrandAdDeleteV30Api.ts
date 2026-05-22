// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAdDeleteV30Request, BrandAdDeleteV30Response } from "../models";


export interface OpenApiV30BrandAdDeletePostRequest {
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

  async openApiV30BrandAdDeletePost(request: OpenApiV30BrandAdDeletePostRequest): Promise<BrandAdDeleteV30Response> {
    const response = await this.openApiV30BrandAdDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdDeletePostWithHttpInfo(request: OpenApiV30BrandAdDeletePostRequest): Promise<ApiResponse<BrandAdDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandAdDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/ad/delete/",
      queryParams: [

      ],
      body: request.brandAdDeleteV30Request
    });
  }
}


