// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandAdCancelDeleteV30Request, BrandAdCancelDeleteV30Response } from "../models";


export interface OpenApiV30BrandAdCancelDeletePostRequest {
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

  async openApiV30BrandAdCancelDeletePost(request: OpenApiV30BrandAdCancelDeletePostRequest): Promise<BrandAdCancelDeleteV30Response> {
    const response = await this.openApiV30BrandAdCancelDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandAdCancelDeletePostWithHttpInfo(request: OpenApiV30BrandAdCancelDeletePostRequest): Promise<ApiResponse<BrandAdCancelDeleteV30Response>> {

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


