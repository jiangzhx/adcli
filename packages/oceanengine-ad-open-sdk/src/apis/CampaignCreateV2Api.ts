// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignCreateV2Request, CampaignCreateV2Response } from "../models";


export interface OpenApi2CampaignCreatePostRequest {
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

  async openApi2CampaignCreatePost(request: OpenApi2CampaignCreatePostRequest): Promise<CampaignCreateV2Response> {
    const response = await this.openApi2CampaignCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignCreatePostWithHttpInfo(request: OpenApi2CampaignCreatePostRequest): Promise<ApiResponse<CampaignCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignCreateV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/create/",
      queryParams: [

      ],
      body: request.campaignCreateV2Request
    });
  }
}


