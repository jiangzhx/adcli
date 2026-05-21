// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsRubeexRemarkV2Filtering, ToolsRubeexRemarkV2Response, ToolsRubeexRemarkV2Scene } from "../models";


export class ToolsRubeexRemarkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexRemarkGet(advertiserId: number, projectId: number, scene: ToolsRubeexRemarkV2Scene, filtering: ToolsRubeexRemarkV2Filtering): Promise<ToolsRubeexRemarkV2Response> {
    const response = await this.openApi2ToolsRubeexRemarkGetWithHttpInfo(advertiserId, projectId, scene, filtering);
    return response.data;
  }

  async openApi2ToolsRubeexRemarkGetWithHttpInfo(advertiserId: number, projectId: number, scene: ToolsRubeexRemarkV2Scene, filtering: ToolsRubeexRemarkV2Filtering): Promise<ApiResponse<ToolsRubeexRemarkV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexRemarkGet");
    }

    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexRemarkGet");
    }

    if (scene == null) {
      throw new ApiException("Missing the required parameter 'scene' when calling openApi2ToolsRubeexRemarkGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexRemarkV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex/remark/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "project_id", value: projectId },
        { name: "scene", value: scene },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


