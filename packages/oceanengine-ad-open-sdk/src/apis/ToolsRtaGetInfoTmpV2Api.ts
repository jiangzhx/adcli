// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRtaGetInfoTmpV2Response } from "../models";


export class ToolsRtaGetInfoTmpV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaGetInfoTmpGet(advertiserId: number, campaignId: number): Promise<ToolsRtaGetInfoTmpV2Response> {
    const response = await this.openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(advertiserId, campaignId);
    return response.data;
  }

  async openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(advertiserId: number, campaignId: number): Promise<ApiResponse<ToolsRtaGetInfoTmpV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRtaGetInfoTmpGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRtaGetInfoTmpV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rta/get_info_tmp/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "campaign_id", value: campaignId }
      ]
    });
  }
}


