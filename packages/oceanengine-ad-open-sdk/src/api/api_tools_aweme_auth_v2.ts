// Generated from oceanengine/ad_open_sdk_go api/api_tools_aweme_auth_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAwemeAuthV2Request, ToolsAwemeAuthV2Response } from "../models/index";


export interface ToolsAwemeAuthV2ApiOpenApi2ToolsAwemeAuthPostRequest {
  toolsAwemeAuthV2Request?: ToolsAwemeAuthV2Request;
}

export class ToolsAwemeAuthV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthPost(request: ToolsAwemeAuthV2ApiOpenApi2ToolsAwemeAuthPostRequest): Promise<ToolsAwemeAuthV2Response> {
    const response = await this.openApi2ToolsAwemeAuthPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthPostWithHttpInfo(request: ToolsAwemeAuthV2ApiOpenApi2ToolsAwemeAuthPostRequest): Promise<ApiResponse<ToolsAwemeAuthV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAwemeAuthV2Request
    });
  }
}


