// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpProductDeleteV30Request, DpaEbpProductDeleteV30Response } from "../models";


export class DpaEbpProductDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpProductDeletePost(dpaEbpProductDeleteV30Request: DpaEbpProductDeleteV30Request): Promise<DpaEbpProductDeleteV30Response> {
    const response = await this.openApiV30DpaEbpProductDeletePostWithHttpInfo(dpaEbpProductDeleteV30Request);
    return response.data;
  }

  async openApiV30DpaEbpProductDeletePostWithHttpInfo(dpaEbpProductDeleteV30Request: DpaEbpProductDeleteV30Request): Promise<ApiResponse<DpaEbpProductDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<DpaEbpProductDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/product/delete/",
      queryParams: [

      ],
      body: dpaEbpProductDeleteV30Request
    });
  }
}


