// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsQuotaGetV2CampaignType, ToolsQuotaGetV2DeliveryRange, ToolsQuotaGetV2Response } from "../models";


export class ToolsQuotaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsQuotaGetGet(advertiserId: number, campaignType: ToolsQuotaGetV2CampaignType, deliveryRange: ToolsQuotaGetV2DeliveryRange): Promise<ToolsQuotaGetV2Response> {
    const response = await this.openApi2ToolsQuotaGetGetWithHttpInfo(advertiserId, campaignType, deliveryRange);
    return response.data;
  }

  async openApi2ToolsQuotaGetGetWithHttpInfo(advertiserId: number, campaignType: ToolsQuotaGetV2CampaignType, deliveryRange: ToolsQuotaGetV2DeliveryRange): Promise<ApiResponse<ToolsQuotaGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsQuotaGetGet");
    }

    if (campaignType == null) {
      throw new ApiException("Missing the required parameter 'campaignType' when calling openApi2ToolsQuotaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsQuotaGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "campaign_type", value: campaignType },
        { name: "delivery_range", value: deliveryRange }
      ]
    });
  }
}


