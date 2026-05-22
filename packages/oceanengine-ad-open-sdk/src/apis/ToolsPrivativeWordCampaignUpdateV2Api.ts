// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordCampaignUpdateV2Request, ToolsPrivativeWordCampaignUpdateV2Response } from "../models";


export interface OpenApi2ToolsPrivativeWordCampaignUpdatePostRequest {
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

  async openApi2ToolsPrivativeWordCampaignUpdatePost(request: OpenApi2ToolsPrivativeWordCampaignUpdatePostRequest): Promise<ToolsPrivativeWordCampaignUpdateV2Response> {
    const response = await this.openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordCampaignUpdatePostWithHttpInfo(request: OpenApi2ToolsPrivativeWordCampaignUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordCampaignUpdateV2Response>> {

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


