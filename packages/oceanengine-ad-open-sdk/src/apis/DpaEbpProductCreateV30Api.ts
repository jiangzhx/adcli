// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductCreateV30Request, DpaEbpProductCreateV30Response } from "../models";


export interface OpenApiV30DpaEbpProductCreatePostRequest {
  dpaEbpProductCreateV30Request?: DpaEbpProductCreateV30Request;
}

export class DpaEbpProductCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductCreatePost(request: OpenApiV30DpaEbpProductCreatePostRequest): Promise<DpaEbpProductCreateV30Response> {
    const response = await this.openApiV30DpaEbpProductCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductCreatePostWithHttpInfo(request: OpenApiV30DpaEbpProductCreatePostRequest): Promise<ApiResponse<DpaEbpProductCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/create/",
      queryParams: [

      ],
      body: request.dpaEbpProductCreateV30Request
    });
  }
}


