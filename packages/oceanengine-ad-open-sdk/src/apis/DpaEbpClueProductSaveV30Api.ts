// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaEbpClueProductSaveV30Request, DpaEbpClueProductSaveV30Response } from "../models";


export class DpaEbpClueProductSaveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaEbpClueProductSavePost(request: DpaEbpClueProductSaveV30Request): Promise<DpaEbpClueProductSaveV30Response> {
    const response = await this.openApiV30DpaEbpClueProductSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaEbpClueProductSavePostWithHttpInfo(request: DpaEbpClueProductSaveV30Request): Promise<ApiResponse<DpaEbpClueProductSaveV30Response>> {
    return this.apiClient.requestWithHttpInfo<DpaEbpClueProductSaveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/ebp/clue_product/save/",
      queryParams: [

      ],
      body: request
    });
  }
}


