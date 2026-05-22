// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordCampaignAddV2Request, ToolsPrivativeWordCampaignAddV2Response } from "../models";


export interface OpenApi2ToolsPrivativeWordCampaignAddPostRequest {
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

  async openApi2ToolsPrivativeWordCampaignAddPost(request: OpenApi2ToolsPrivativeWordCampaignAddPostRequest): Promise<ToolsPrivativeWordCampaignAddV2Response> {
    const response = await this.openApi2ToolsPrivativeWordCampaignAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordCampaignAddPostWithHttpInfo(request: OpenApi2ToolsPrivativeWordCampaignAddPostRequest): Promise<ApiResponse<ToolsPrivativeWordCampaignAddV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordCampaignAddV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/campaign/add/",
      queryParams: [

      ],
      body: request.toolsPrivativeWordCampaignAddV2Request
    });
  }
}


