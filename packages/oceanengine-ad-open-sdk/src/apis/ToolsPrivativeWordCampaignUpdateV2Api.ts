// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordCampaignUpdateV2Request, ToolsPrivativeWordCampaignUpdateV2Response } from "../models";


export class ToolsPrivativeWordCampaignUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordCampaignUpdatePost(request: ToolsPrivativeWordCampaignUpdateV2Request): Promise<ToolsPrivativeWordCampaignUpdateV2Response> {
    const response = await this.openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request: ToolsPrivativeWordCampaignUpdateV2Request): Promise<ApiResponse<ToolsPrivativeWordCampaignUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordCampaignUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/campaign/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


