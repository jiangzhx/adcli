// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEventAssetsGetV2AssetType, ToolsEventAssetsGetV2Filtering, ToolsEventAssetsGetV2Response, ToolsEventAssetsGetV2SortType } from "../models";


export class ToolsEventAssetsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsEventAssetsGetGet(advertiserId: number, assetType: ToolsEventAssetsGetV2AssetType, filtering: ToolsEventAssetsGetV2Filtering, sortType: ToolsEventAssetsGetV2SortType, page: number, pageSize: number): Promise<ToolsEventAssetsGetV2Response> {
    const response = await this.openApi2ToolsEventAssetsGetGetWithHttpInfo(advertiserId, assetType, filtering, sortType, page, pageSize);
    return response.data;
  }

  async openApi2ToolsEventAssetsGetGetWithHttpInfo(advertiserId: number, assetType: ToolsEventAssetsGetV2AssetType, filtering: ToolsEventAssetsGetV2Filtering, sortType: ToolsEventAssetsGetV2SortType, page: number, pageSize: number): Promise<ApiResponse<ToolsEventAssetsGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsEventAssetsGetGet");
    }

    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApi2ToolsEventAssetsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEventAssetsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/event/assets/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_type", value: assetType },
        { name: "filtering", value: filtering },
        { name: "sort_type", value: sortType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


