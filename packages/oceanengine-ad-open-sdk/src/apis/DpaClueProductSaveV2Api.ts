// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaClueProductSaveV2Request, DpaClueProductSaveV2Response } from "../models";


export interface OpenApi2DpaClueProductSavePostRequest {
  dpaClueProductSaveV2Request?: DpaClueProductSaveV2Request;
}

export class DpaClueProductSaveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaClueProductSavePost(request: OpenApi2DpaClueProductSavePostRequest): Promise<DpaClueProductSaveV2Response> {
    const response = await this.openApi2DpaClueProductSavePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaClueProductSavePostWithHttpInfo(request: OpenApi2DpaClueProductSavePostRequest): Promise<ApiResponse<DpaClueProductSaveV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaClueProductSaveV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/clue_product/save/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.dpaClueProductSaveV2Request
    });
  }
}


