// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaAssetV2DetailReadV2Request, DpaAssetV2DetailReadV2Response } from "../models";


export interface OpenApi2DpaAssetV2DetailReadPostRequest {
  dpaAssetV2DetailReadV2Request?: DpaAssetV2DetailReadV2Request;
}

export class DpaAssetV2DetailReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaAssetV2DetailReadPost(request: OpenApi2DpaAssetV2DetailReadPostRequest): Promise<DpaAssetV2DetailReadV2Response> {
    const response = await this.openApi2DpaAssetV2DetailReadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaAssetV2DetailReadPostWithHttpInfo(request: OpenApi2DpaAssetV2DetailReadPostRequest): Promise<ApiResponse<DpaAssetV2DetailReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaAssetV2DetailReadV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/asset_v2/detail/read/",
      queryParams: [

      ],
      body: request.dpaAssetV2DetailReadV2Request
    });
  }
}


