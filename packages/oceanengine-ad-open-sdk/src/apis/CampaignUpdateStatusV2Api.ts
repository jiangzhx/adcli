// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CampaignUpdateStatusV2Request, CampaignUpdateStatusV2Response } from "../models";


export class CampaignUpdateStatusV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CampaignUpdateStatusPost(request: CampaignUpdateStatusV2Request): Promise<CampaignUpdateStatusV2Response> {
    const response = await this.openApi2CampaignUpdateStatusPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CampaignUpdateStatusPostWithHttpInfo(request: CampaignUpdateStatusV2Request): Promise<ApiResponse<CampaignUpdateStatusV2Response>> {
    return this.apiClient.requestWithHttpInfo<CampaignUpdateStatusV2Response>({
      method: "POST",
      path: "/open_api/2/campaign/update/status/",
      queryParams: [

      ],
      body: request
    });
  }
}


