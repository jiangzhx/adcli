// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_ad_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordAdUpdateV2Request, ToolsPrivativeWordAdUpdateV2Response } from "../models/index";


export interface ToolsPrivativeWordAdUpdateV2ApiOpenApi2ToolsPrivativeWordAdUpdatePostRequest {
  toolsPrivativeWordAdUpdateV2Request?: ToolsPrivativeWordAdUpdateV2Request;
}

export class ToolsPrivativeWordAdUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordAdUpdatePost(request: ToolsPrivativeWordAdUpdateV2ApiOpenApi2ToolsPrivativeWordAdUpdatePostRequest): Promise<ToolsPrivativeWordAdUpdateV2Response> {
    const response = await this.openApi2ToolsPrivativeWordAdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordAdUpdatePostWithHttpInfo(request: ToolsPrivativeWordAdUpdateV2ApiOpenApi2ToolsPrivativeWordAdUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordAdUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordAdUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/ad/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordAdUpdateV2Request
    });
  }
}


