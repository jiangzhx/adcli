// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandOrderCancelDeleteV30Request, BrandOrderCancelDeleteV30Response } from "../models";


export class BrandOrderCancelDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandOrderCancelDeletePost(request: BrandOrderCancelDeleteV30Request): Promise<BrandOrderCancelDeleteV30Response> {
    const response = await this.openApiV30BrandOrderCancelDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandOrderCancelDeletePostWithHttpInfo(request: BrandOrderCancelDeleteV30Request): Promise<ApiResponse<BrandOrderCancelDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<BrandOrderCancelDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/brand/order/cancel_delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


