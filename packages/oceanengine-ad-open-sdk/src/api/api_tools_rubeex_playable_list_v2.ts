// Generated from oceanengine/ad_open_sdk_go api/api_tools_rubeex_playable_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRubeexPlayableListV2Filtering, ToolsRubeexPlayableListV2Response } from "../models/index";


export interface ToolsRubeexPlayableListV2ApiOpenApi2ToolsRubeexPlayableListGetRequest {
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

  async openApi2ToolsRubeexPlayableListGet(request: ToolsRubeexPlayableListV2ApiOpenApi2ToolsRubeexPlayableListGetRequest): Promise<ToolsRubeexPlayableListV2Response> {
    const response = await this.openApi2ToolsRubeexPlayableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexPlayableListGetWithHttpInfo(request: ToolsRubeexPlayableListV2ApiOpenApi2ToolsRubeexPlayableListGetRequest): Promise<ApiResponse<ToolsRubeexPlayableListV2Response>> {
    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }

    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


