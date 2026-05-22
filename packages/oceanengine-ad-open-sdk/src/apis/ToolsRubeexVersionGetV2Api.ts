// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRubeexVersionGetV2Response } from "../models";


export interface OpenApi2ToolsRubeexVersionGetGetRequest {
  advertiserId: number | string;
  projectId: number;
}

export class ToolsRubeexVersionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexVersionGetGet(request: OpenApi2ToolsRubeexVersionGetGetRequest): Promise<ToolsRubeexVersionGetV2Response> {
    const response = await this.openApi2ToolsRubeexVersionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexVersionGetGetWithHttpInfo(request: OpenApi2ToolsRubeexVersionGetGetRequest): Promise<ApiResponse<ToolsRubeexVersionGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexVersionGetGet");
    }

    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexVersionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexVersionGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex/version/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId }
      ]
    });
  }
}


