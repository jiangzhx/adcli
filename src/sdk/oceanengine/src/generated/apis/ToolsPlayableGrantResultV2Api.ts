// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPlayableGrantResultV2Response } from "../models";


export class ToolsPlayableGrantResultV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableGrantResultGet(advertiserId: number, taskIds: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ToolsPlayableGrantResultV2Response> {
    const response = await this.openApi2ToolsPlayableGrantResultGetWithHttpInfo(advertiserId, taskIds, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApi2ToolsPlayableGrantResultGetWithHttpInfo(advertiserId: number, taskIds: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<ToolsPlayableGrantResultV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsPlayableGrantResultGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableGrantResultV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable/grant/result/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


