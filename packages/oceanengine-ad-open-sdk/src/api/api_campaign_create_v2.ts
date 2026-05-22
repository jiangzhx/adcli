// Generated from oceanengine/ad_open_sdk_go api/api_campaign_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CampaignCreateV2Request, CampaignCreateV2Response } from "../models/index";


export interface CampaignCreateV2ApiOpenApi2CampaignCreatePostRequest {
  campaignCreateV2Request?: CampaignCreateV2Request;
}

export class CampaignCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignCreatePost(request: CampaignCreateV2ApiOpenApi2CampaignCreatePostRequest): Promise<CampaignCreateV2Response> {
    const response = await this.openApi2CampaignCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignCreatePostWithHttpInfo(request: CampaignCreateV2ApiOpenApi2CampaignCreatePostRequest): Promise<ApiResponse<CampaignCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignCreateV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.campaignCreateV2Request
    });
  }
}


