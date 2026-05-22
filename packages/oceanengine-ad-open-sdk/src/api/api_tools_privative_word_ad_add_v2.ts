// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_ad_add_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordAdAddV2Request, ToolsPrivativeWordAdAddV2Response } from "../models/index";


export interface ToolsPrivativeWordAdAddV2ApiOpenApi2ToolsPrivativeWordAdAddPostRequest {
  toolsPrivativeWordAdAddV2Request?: ToolsPrivativeWordAdAddV2Request;
}

export class ToolsPrivativeWordAdAddV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordAdAddPost(request: ToolsPrivativeWordAdAddV2ApiOpenApi2ToolsPrivativeWordAdAddPostRequest): Promise<ToolsPrivativeWordAdAddV2Response> {
    const response = await this.openApi2ToolsPrivativeWordAdAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordAdAddPostWithHttpInfo(request: ToolsPrivativeWordAdAddV2ApiOpenApi2ToolsPrivativeWordAdAddPostRequest): Promise<ApiResponse<ToolsPrivativeWordAdAddV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordAdAddV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/ad/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordAdAddV2Request
    });
  }
}


