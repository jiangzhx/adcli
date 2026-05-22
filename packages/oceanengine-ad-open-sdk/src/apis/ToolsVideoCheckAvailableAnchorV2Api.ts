// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsVideoCheckAvailableAnchorV2ExternalAction, ToolsVideoCheckAvailableAnchorV2LandingType, ToolsVideoCheckAvailableAnchorV2Response } from "../models";


export class ToolsVideoCheckAvailableAnchorV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsVideoCheckAvailableAnchorGet(advertiserId: number, itemIds: number[], landingType: ToolsVideoCheckAvailableAnchorV2LandingType, externalAction: ToolsVideoCheckAvailableAnchorV2ExternalAction): Promise<ToolsVideoCheckAvailableAnchorV2Response> {
    const response = await this.openApi2ToolsVideoCheckAvailableAnchorGetWithHttpInfo(advertiserId, itemIds, landingType, externalAction);
    return response.data;
  }

  async openApi2ToolsVideoCheckAvailableAnchorGetWithHttpInfo(advertiserId: number, itemIds: number[], landingType: ToolsVideoCheckAvailableAnchorV2LandingType, externalAction: ToolsVideoCheckAvailableAnchorV2ExternalAction): Promise<ApiResponse<ToolsVideoCheckAvailableAnchorV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsVideoCheckAvailableAnchorGet");
    }

    if (itemIds == null) {
      throw new ApiException("Missing the required parameter 'itemIds' when calling openApi2ToolsVideoCheckAvailableAnchorGet");
    }

    if (landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApi2ToolsVideoCheckAvailableAnchorGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApi2ToolsVideoCheckAvailableAnchorGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsVideoCheckAvailableAnchorV2Response>({
      method: "GET",
      path: "/open_api/2/tools/video/check_available_anchor/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "external_action", value: externalAction },
        { name: "item_ids", value: itemIds, collectionFormat: "csv" }
      ]
    });
  }
}


