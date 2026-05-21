// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CampaignCreateV2Request, CampaignCreateV2Response } from "../models";


export class CampaignCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignCreatePost(campaignCreateV2Request: CampaignCreateV2Request): Promise<CampaignCreateV2Response> {
    const response = await this.openApi2CampaignCreatePostWithHttpInfo(campaignCreateV2Request);
    return response.data;
  }

  async openApi2CampaignCreatePostWithHttpInfo(campaignCreateV2Request: CampaignCreateV2Request): Promise<ApiResponse<CampaignCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignCreateV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/create/",
      queryParams: [

      ],
      body: campaignCreateV2Request
    });
  }
}


