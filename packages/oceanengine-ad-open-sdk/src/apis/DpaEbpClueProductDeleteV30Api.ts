// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpClueProductDeleteV30Request, DpaEbpClueProductDeleteV30Response } from "../models";


export class DpaEbpClueProductDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductDeletePost(request: DpaEbpClueProductDeleteV30Request): Promise<DpaEbpClueProductDeleteV30Response> {
    const response = await this.openApiV30DpaEbpClueProductDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductDeletePostWithHttpInfo(request: DpaEbpClueProductDeleteV30Request): Promise<ApiResponse<DpaEbpClueProductDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/clue_product/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


