// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignUpdateV2Request, CampaignUpdateV2Response } from "../models";


export class CampaignUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignUpdatePost(campaignUpdateV2Request: CampaignUpdateV2Request): Promise<CampaignUpdateV2Response> {
    const response = await this.openApi2CampaignUpdatePostWithHttpInfo(campaignUpdateV2Request);
    return response.data;
  }

  async openApi2CampaignUpdatePostWithHttpInfo(campaignUpdateV2Request: CampaignUpdateV2Request): Promise<ApiResponse<CampaignUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/update/",
      queryParams: [

      ],
      body: campaignUpdateV2Request
    });
  }
}


