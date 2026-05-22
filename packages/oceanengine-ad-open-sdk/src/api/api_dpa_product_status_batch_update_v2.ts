// Generated from oceanengine/ad_open_sdk_go api/api_dpa_product_status_batch_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaProductStatusBatchUpdateV2Request, DpaProductStatusBatchUpdateV2Response } from "../models/index";


export interface DpaProductStatusBatchUpdateV2ApiOpenApi2DpaProductStatusBatchUpdatePostRequest {
  dpaProductStatusBatchUpdateV2Request?: DpaProductStatusBatchUpdateV2Request;
}

export class DpaProductStatusBatchUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaProductStatusBatchUpdatePost(request: DpaProductStatusBatchUpdateV2ApiOpenApi2DpaProductStatusBatchUpdatePostRequest): Promise<DpaProductStatusBatchUpdateV2Response> {
    const response = await this.openApi2DpaProductStatusBatchUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaProductStatusBatchUpdatePostWithHttpInfo(request: DpaProductStatusBatchUpdateV2ApiOpenApi2DpaProductStatusBatchUpdatePostRequest): Promise<ApiResponse<DpaProductStatusBatchUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaProductStatusBatchUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/product_status/batch_update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaProductStatusBatchUpdateV2Request
    });
  }
}


