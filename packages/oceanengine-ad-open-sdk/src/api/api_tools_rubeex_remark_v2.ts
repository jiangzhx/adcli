// Generated from oceanengine/ad_open_sdk_go api/api_tools_rubeex_remark_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRubeexRemarkV2Filtering, ToolsRubeexRemarkV2Response, ToolsRubeexRemarkV2Scene } from "../models/index";


export interface ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest {
  advertiserId: number;
  projectId: number;
  scene: ToolsRubeexRemarkV2Scene;
  filtering?: ToolsRubeexRemarkV2Filtering;
}

export class ToolsRubeexRemarkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexRemarkGet(request: ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest): Promise<ToolsRubeexRemarkV2Response> {
    const response = await this.openApi2ToolsRubeexRemarkGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexRemarkGetWithHttpInfo(request: ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest): Promise<ApiResponse<ToolsRubeexRemarkV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexRemarkGet");
    }

    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexRemarkGet");
    }

    if (request.scene == null) {
      throw new ApiException("Missing the required parameter 'scene' when calling openApi2ToolsRubeexRemarkGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexRemarkV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex/remark/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "scene", value: request.scene },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


