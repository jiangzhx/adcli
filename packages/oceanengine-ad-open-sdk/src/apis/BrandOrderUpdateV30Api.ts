// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOrderUpdateV30Request, BrandOrderUpdateV30Response } from "../models";


export interface OpenApiV30BrandOrderUpdatePostRequest {
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

  async openApiV30BrandOrderUpdatePost(request: OpenApiV30BrandOrderUpdatePostRequest): Promise<BrandOrderUpdateV30Response> {
    const response = await this.openApiV30BrandOrderUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderUpdatePostWithHttpInfo(request: OpenApiV30BrandOrderUpdatePostRequest): Promise<ApiResponse<BrandOrderUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<BrandOrderUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/update/",
      queryParams: [

      ],
      body: request.brandOrderUpdateV30Request
    });
  }
}


