// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsRubeexPlayableListV2Filtering, ToolsRubeexPlayableListV2Response } from "../models";


export class ToolsRubeexPlayableListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexPlayableListGet(projectId: number, advertiserId: number, page: number, pageSize: number, filtering: ToolsRubeexPlayableListV2Filtering): Promise<ToolsRubeexPlayableListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableListGetWithHttpInfo(projectId, advertiserId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableListGetWithHttpInfo(projectId: number, advertiserId: number, page: number, pageSize: number, filtering: ToolsRubeexPlayableListV2Filtering): Promise<ApiResponse<ToolsRubeexPlayableListV2Response>> {
    if (projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexPlayableListGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexPlayableListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexPlayableListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex_playable/list/",
      queryParams: [
        { name: "project_id", value: projectId },
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


