// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsQuotaGetV2CampaignType, ToolsQuotaGetV2DeliveryRange, ToolsQuotaGetV2Response } from "../models";


export interface OpenApi2ToolsQuotaGetGetRequest {
  advertiserId: number | string;
  campaignType: ToolsQuotaGetV2CampaignType;
  deliveryRange?: ToolsQuotaGetV2DeliveryRange;
}

export class ToolsQuotaGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsQuotaGetGet(request: OpenApi2ToolsQuotaGetGetRequest): Promise<ToolsQuotaGetV2Response> {
    const response = await this.openApi2ToolsQuotaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsQuotaGetGetWithHttpInfo(request: OpenApi2ToolsQuotaGetGetRequest): Promise<ApiResponse<ToolsQuotaGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsQuotaGetGet");
    }

    if (request.campaignType == null) {
      throw new ApiException("Missing the required parameter 'campaignType' when calling openApi2ToolsQuotaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsQuotaGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "campaign_type", value: request.campaignType },
        { name: "delivery_range", value: request.deliveryRange }
      ]
    });
  }
}


