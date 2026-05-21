// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaAssetV2DetailReadV2Request, DpaAssetV2DetailReadV2Response } from "../models";


export class DpaAssetV2DetailReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaAssetV2DetailReadPost(dpaAssetV2DetailReadV2Request: DpaAssetV2DetailReadV2Request): Promise<DpaAssetV2DetailReadV2Response> {
    const response = await this.openApi2DpaAssetV2DetailReadPostWithHttpInfo(dpaAssetV2DetailReadV2Request);
    return response.data;
  }

  async openApi2DpaAssetV2DetailReadPostWithHttpInfo(dpaAssetV2DetailReadV2Request: DpaAssetV2DetailReadV2Request): Promise<ApiResponse<DpaAssetV2DetailReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DpaAssetV2DetailReadV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/asset_v2/detail/read/",
      queryParams: [

      ],
      body: dpaAssetV2DetailReadV2Request
    });
  }
}


