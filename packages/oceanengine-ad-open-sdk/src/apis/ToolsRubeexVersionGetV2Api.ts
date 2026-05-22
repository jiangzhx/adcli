// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRubeexVersionGetV2Response } from "../models";


export class ToolsRubeexVersionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexVersionGetGet(advertiserId: number, projectId: number): Promise<ToolsRubeexVersionGetV2Response> {
    const response = await this.openApi2ToolsRubeexVersionGetGetWithHttpInfo(advertiserId, projectId);
    return response.data;
  }

  async openApi2ToolsRubeexVersionGetGetWithHttpInfo(advertiserId: number, projectId: number): Promise<ApiResponse<ToolsRubeexVersionGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexVersionGetGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexVersionGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex/version/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "project_id", value: projectId }
      ]
    });
  }
}


