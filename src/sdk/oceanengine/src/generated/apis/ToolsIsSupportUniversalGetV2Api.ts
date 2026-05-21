// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsIsSupportUniversalGetV2DeepBidType, ToolsIsSupportUniversalGetV2DeepExternalAction, ToolsIsSupportUniversalGetV2ExternalAction, ToolsIsSupportUniversalGetV2LandingType, ToolsIsSupportUniversalGetV2Response } from "../models";


export class ToolsIsSupportUniversalGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsIsSupportUniversalGetGet(advertiserId: number, landingType: ToolsIsSupportUniversalGetV2LandingType, externalAction: ToolsIsSupportUniversalGetV2ExternalAction, deepExternalAction: ToolsIsSupportUniversalGetV2DeepExternalAction, deepBidType: ToolsIsSupportUniversalGetV2DeepBidType): Promise<ToolsIsSupportUniversalGetV2Response> {
    const response = await this.openApi2ToolsIsSupportUniversalGetGetWithHttpInfo(advertiserId, landingType, externalAction, deepExternalAction, deepBidType);
    return response.data;
  }

  async openApi2ToolsIsSupportUniversalGetGetWithHttpInfo(advertiserId: number, landingType: ToolsIsSupportUniversalGetV2LandingType, externalAction: ToolsIsSupportUniversalGetV2ExternalAction, deepExternalAction: ToolsIsSupportUniversalGetV2DeepExternalAction, deepBidType: ToolsIsSupportUniversalGetV2DeepBidType): Promise<ApiResponse<ToolsIsSupportUniversalGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsIsSupportUniversalGetGet");
    }

    if (landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApi2ToolsIsSupportUniversalGetGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApi2ToolsIsSupportUniversalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsIsSupportUniversalGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/is_support_universal/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "external_action", value: externalAction },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "deep_bid_type", value: deepBidType }
      ]
    });
  }
}


