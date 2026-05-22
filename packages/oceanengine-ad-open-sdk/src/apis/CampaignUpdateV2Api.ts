// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignUpdateV2Request, CampaignUpdateV2Response } from "../models";


export interface OpenApi2CampaignUpdatePostRequest {
  campaignUpdateV2Request?: CampaignUpdateV2Request;
}

export class CampaignUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignUpdatePost(request: OpenApi2CampaignUpdatePostRequest): Promise<CampaignUpdateV2Response> {
    const response = await this.openApi2CampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignUpdatePostWithHttpInfo(request: OpenApi2CampaignUpdatePostRequest): Promise<ApiResponse<CampaignUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CampaignUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.campaignUpdateV2Request
    });
  }
}


