// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_grant_result_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableGrantResultV2Response } from "../models/index";


export interface ToolsPlayableGrantResultV2ApiOpenApi2ToolsPlayableGrantResultGetRequest {
  advertiserId: number | string;
  taskIds?: number | string[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}

export class ToolsPlayableGrantResultV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableGrantResultGet(request: ToolsPlayableGrantResultV2ApiOpenApi2ToolsPlayableGrantResultGetRequest): Promise<ToolsPlayableGrantResultV2Response> {
    const response = await this.openApi2ToolsPlayableGrantResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableGrantResultGetWithHttpInfo(request: ToolsPlayableGrantResultV2ApiOpenApi2ToolsPlayableGrantResultGetRequest): Promise<ApiResponse<ToolsPlayableGrantResultV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPlayableGrantResultGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableGrantResultV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable/grant/result/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "task_ids", value: request.taskIds, collectionFormat: "csv" },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


