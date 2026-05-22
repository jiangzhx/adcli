// Generated from oceanengine/ad_open_sdk_go api/api_campaign_update_status_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CampaignUpdateStatusV2Request, CampaignUpdateStatusV2Response } from "../models/index";


export interface CampaignUpdateStatusV2ApiOpenApi2CampaignUpdateStatusPostRequest {
  campaignUpdateStatusV2Request?: CampaignUpdateStatusV2Request;
}

export class CampaignUpdateStatusV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignUpdateStatusPost(request: CampaignUpdateStatusV2ApiOpenApi2CampaignUpdateStatusPostRequest): Promise<CampaignUpdateStatusV2Response> {
    const response = await this.openApi2CampaignUpdateStatusPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignUpdateStatusPostWithHttpInfo(request: CampaignUpdateStatusV2ApiOpenApi2CampaignUpdateStatusPostRequest): Promise<ApiResponse<CampaignUpdateStatusV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignUpdateStatusV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/update/status/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.campaignUpdateStatusV2Request
    });
  }
}


