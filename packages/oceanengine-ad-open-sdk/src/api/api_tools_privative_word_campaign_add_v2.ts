// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_campaign_add_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordCampaignAddV2Request, ToolsPrivativeWordCampaignAddV2Response } from "../models/index";


export interface ToolsPrivativeWordCampaignAddV2ApiOpenApi2ToolsPrivativeWordCampaignAddPostRequest {
  toolsPrivativeWordCampaignAddV2Request?: ToolsPrivativeWordCampaignAddV2Request;
}

export class ToolsPrivativeWordCampaignAddV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordCampaignAddPost(request: ToolsPrivativeWordCampaignAddV2ApiOpenApi2ToolsPrivativeWordCampaignAddPostRequest): Promise<ToolsPrivativeWordCampaignAddV2Response> {
    const response = await this.openApi2ToolsPrivativeWordCampaignAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordCampaignAddPostWithHttpInfo(request: ToolsPrivativeWordCampaignAddV2ApiOpenApi2ToolsPrivativeWordCampaignAddPostRequest): Promise<ApiResponse<ToolsPrivativeWordCampaignAddV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordCampaignAddV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/campaign/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordCampaignAddV2Request
    });
  }
}


