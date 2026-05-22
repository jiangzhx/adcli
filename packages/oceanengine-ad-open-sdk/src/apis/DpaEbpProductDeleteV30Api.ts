// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductDeleteV30Request, DpaEbpProductDeleteV30Response } from "../models";


export interface OpenApiV30DpaEbpProductDeletePostRequest {
  dpaEbpProductDeleteV30Request?: DpaEbpProductDeleteV30Request;
}

export class DpaEbpProductDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductDeletePost(request: OpenApiV30DpaEbpProductDeletePostRequest): Promise<DpaEbpProductDeleteV30Response> {
    const response = await this.openApiV30DpaEbpProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductDeletePostWithHttpInfo(request: OpenApiV30DpaEbpProductDeletePostRequest): Promise<ApiResponse<DpaEbpProductDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/delete/",
      queryParams: [

      ],
      body: request.dpaEbpProductDeleteV30Request
    });
  }
}


