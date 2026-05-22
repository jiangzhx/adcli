// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEventAllAssetsDetailV2Response } from "../models";


export class ToolsEventAllAssetsDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAllAssetsDetailGet(advertiserId: number, assetIds: number[]): Promise<ToolsEventAllAssetsDetailV2Response> {
    const response = await this.openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(advertiserId, assetIds);
    return response.data;
  }

  async openApi2ToolsEventAllAssetsDetailGetWithHttpInfo(advertiserId: number, assetIds: number[]): Promise<ApiResponse<ToolsEventAllAssetsDetailV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAllAssetsDetailGet");
    }

    if (assetIds == null) {
      throw new ApiException("Missing the required parameter 'assetIds' when calling openApi2ToolsEventAllAssetsDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAllAssetsDetailV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/all_assets/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_ids", value: assetIds, collectionFormat: "csv" }
      ]
    });
  }
}


