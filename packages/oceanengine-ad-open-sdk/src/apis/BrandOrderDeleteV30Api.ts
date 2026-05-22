// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOrderDeleteV30Request, BrandOrderDeleteV30Response } from "../models";


export interface OpenApiV30BrandOrderDeletePostRequest {
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

  async openApiV30BrandOrderDeletePost(request: OpenApiV30BrandOrderDeletePostRequest): Promise<BrandOrderDeleteV30Response> {
    const response = await this.openApiV30BrandOrderDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderDeletePostWithHttpInfo(request: OpenApiV30BrandOrderDeletePostRequest): Promise<ApiResponse<BrandOrderDeleteV30Response>> {

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


