// Generated from oceanengine/ad_open_sdk_go api/api_tools_is_support_universal_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsIsSupportUniversalGetV2DeepBidType, ToolsIsSupportUniversalGetV2DeepExternalAction, ToolsIsSupportUniversalGetV2ExternalAction, ToolsIsSupportUniversalGetV2LandingType, ToolsIsSupportUniversalGetV2Response } from "../models/index";


export interface ToolsIsSupportUniversalGetV2ApiOpenApi2ToolsIsSupportUniversalGetGetRequest {
  advertiserId: number | string;
  landingType: ToolsIsSupportUniversalGetV2LandingType;
  externalAction: ToolsIsSupportUniversalGetV2ExternalAction;
  deepExternalAction?: ToolsIsSupportUniversalGetV2DeepExternalAction;
  deepBidType?: ToolsIsSupportUniversalGetV2DeepBidType;
}

export class ToolsIsSupportUniversalGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsIsSupportUniversalGetGet(request: ToolsIsSupportUniversalGetV2ApiOpenApi2ToolsIsSupportUniversalGetGetRequest): Promise<ToolsIsSupportUniversalGetV2Response> {
    const response = await this.openApi2ToolsIsSupportUniversalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsIsSupportUniversalGetGetWithHttpInfo(request: ToolsIsSupportUniversalGetV2ApiOpenApi2ToolsIsSupportUniversalGetGetRequest): Promise<ApiResponse<ToolsIsSupportUniversalGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsIsSupportUniversalGetGet");
    }

    if (request.landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApi2ToolsIsSupportUniversalGetGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApi2ToolsIsSupportUniversalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsIsSupportUniversalGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/is_support_universal/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "external_action", value: request.externalAction },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "deep_bid_type", value: request.deepBidType }
      ]
    });
  }
}


