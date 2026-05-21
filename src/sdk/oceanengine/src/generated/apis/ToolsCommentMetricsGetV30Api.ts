// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCommentMetricsGetV30Filtering, ToolsCommentMetricsGetV30Response } from "../models";


export class ToolsCommentMetricsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentMetricsGetGet(advertiserId: number, startTime: string, endTime: string, filtering: ToolsCommentMetricsGetV30Filtering): Promise<ToolsCommentMetricsGetV30Response> {
    const response = await this.openApiV30ToolsCommentMetricsGetGetWithHttpInfo(advertiserId, startTime, endTime, filtering);
    return response.data;
  }

  async openApiV30ToolsCommentMetricsGetGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, filtering: ToolsCommentMetricsGetV30Filtering): Promise<ApiResponse<ToolsCommentMetricsGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentMetricsGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentMetricsGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentMetricsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentMetricsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment_metrics/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


