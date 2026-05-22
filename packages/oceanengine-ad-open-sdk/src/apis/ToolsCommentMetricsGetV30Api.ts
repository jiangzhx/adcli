// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentMetricsGetV30Filtering, ToolsCommentMetricsGetV30Response } from "../models";


export interface OpenApiV30ToolsCommentMetricsGetGetRequest {
  advertiserId: number | string;
  startTime: string;
  endTime: string;
  filtering?: ToolsCommentMetricsGetV30Filtering;
}

export class ToolsCommentMetricsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentMetricsGetGet(request: OpenApiV30ToolsCommentMetricsGetGetRequest): Promise<ToolsCommentMetricsGetV30Response> {
    const response = await this.openApiV30ToolsCommentMetricsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentMetricsGetGetWithHttpInfo(request: OpenApiV30ToolsCommentMetricsGetGetRequest): Promise<ApiResponse<ToolsCommentMetricsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentMetricsGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentMetricsGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentMetricsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentMetricsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment_metrics/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


