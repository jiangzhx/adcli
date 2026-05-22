// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaProductStatusBatchUpdateV2Request, DpaProductStatusBatchUpdateV2Response } from "../models";


export class DpaProductStatusBatchUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductStatusBatchUpdatePost(request: DpaProductStatusBatchUpdateV2Request): Promise<DpaProductStatusBatchUpdateV2Response> {
    const response = await this.openApi2DpaProductStatusBatchUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductStatusBatchUpdatePostWithHttpInfo(request: DpaProductStatusBatchUpdateV2Request): Promise<ApiResponse<DpaProductStatusBatchUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<DpaProductStatusBatchUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product_status/batch_update/",
      queryParams: [

      ],
      body: request
    });
  }
}


