// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAwemeAuthV2Request, ToolsAwemeAuthV2Response } from "../models";


export class ToolsAwemeAuthV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAwemeAuthPost(toolsAwemeAuthV2Request: ToolsAwemeAuthV2Request): Promise<ToolsAwemeAuthV2Response> {
    const response = await this.openApi2ToolsAwemeAuthPostWithHttpInfo(toolsAwemeAuthV2Request);
    return response.data;
  }

  async openApi2ToolsAwemeAuthPostWithHttpInfo(toolsAwemeAuthV2Request: ToolsAwemeAuthV2Request): Promise<ApiResponse<ToolsAwemeAuthV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAwemeAuthV2Response>({
      method: "POST",
      path: "/open_api/2/tools/aweme_auth/",
      queryParams: [

      ],
      body: toolsAwemeAuthV2Request
    });
  }
}


