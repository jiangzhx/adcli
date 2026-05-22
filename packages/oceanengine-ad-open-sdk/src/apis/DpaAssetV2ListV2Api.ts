// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaAssetV2ListV2Request, DpaAssetV2ListV2Response } from "../models";


export class DpaAssetV2ListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaAssetV2ListPost(request: DpaAssetV2ListV2Request): Promise<DpaAssetV2ListV2Response> {
    const response = await this.openApi2DpaAssetV2ListPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaAssetV2ListPostWithHttpInfo(request: DpaAssetV2ListV2Request): Promise<ApiResponse<DpaAssetV2ListV2Response>> {
    return this.apiClient.requestWithHttpInfo<DpaAssetV2ListV2Response>({
      method: "POST",
      path: "/open_api/2/dpa/asset_v2/list/",
      queryParams: [

      ],
      body: request
    });
  }
}


