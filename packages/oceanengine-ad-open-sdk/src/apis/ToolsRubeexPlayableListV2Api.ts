// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRubeexPlayableListV2Filtering, ToolsRubeexPlayableListV2Response } from "../models";


export interface OpenApi2ToolsRubeexPlayableListGetRequest {
  projectId: number;
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
  filtering?: ToolsRubeexPlayableListV2Filtering;
}

export class ToolsRubeexPlayableListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexPlayableListGet(request: OpenApi2ToolsRubeexPlayableListGetRequest): Promise<ToolsRubeexPlayableListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableListGetWithHttpInfo(request: OpenApi2ToolsRubeexPlayableListGetRequest): Promise<ApiResponse<ToolsRubeexPlayableListV2Response>> {
    if (request.projectId == null) {
      throw new ApiException("Missing the required parameter 'projectId' when calling openApi2ToolsRubeexPlayableListGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRubeexPlayableListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexPlayableListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex_playable/list/",
      queryParams: [
        { name: "project_id", value: request.projectId },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


