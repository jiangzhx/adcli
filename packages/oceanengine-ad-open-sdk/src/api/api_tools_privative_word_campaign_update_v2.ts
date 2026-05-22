// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_campaign_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordCampaignUpdateV2Request, ToolsPrivativeWordCampaignUpdateV2Response } from "../models/index";


export interface ToolsPrivativeWordCampaignUpdateV2ApiOpenApi2ToolsPrivativeWordCampaignUpdatePostRequest {
  toolsPrivativeWordCampaignUpdateV2Request?: ToolsPrivativeWordCampaignUpdateV2Request;
}

export class ToolsPrivativeWordCampaignUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordCampaignUpdatePost(request: ToolsPrivativeWordCampaignUpdateV2ApiOpenApi2ToolsPrivativeWordCampaignUpdatePostRequest): Promise<ToolsPrivativeWordCampaignUpdateV2Response> {
    const response = await this.openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request: ToolsPrivativeWordCampaignUpdateV2ApiOpenApi2ToolsPrivativeWordCampaignUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordCampaignUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordCampaignUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/campaign/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordCampaignUpdateV2Request
    });
  }
}


