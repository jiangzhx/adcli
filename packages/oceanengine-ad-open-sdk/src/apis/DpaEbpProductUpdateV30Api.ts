// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductUpdateV30Request, DpaEbpProductUpdateV30Response } from "../models";


export interface OpenApiV30DpaEbpProductUpdatePostRequest {
  dpaEbpProductUpdateV30Request?: DpaEbpProductUpdateV30Request;
}

export class DpaEbpProductUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductUpdatePost(request: OpenApiV30DpaEbpProductUpdatePostRequest): Promise<DpaEbpProductUpdateV30Response> {
    const response = await this.openApiV30DpaEbpProductUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpProductUpdatePostWithHttpInfo(request: OpenApiV30DpaEbpProductUpdatePostRequest): Promise<ApiResponse<DpaEbpProductUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaEbpProductUpdateV30Request
    });
  }
}


