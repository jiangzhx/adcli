// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCommentGetV30Filtering, ToolsCommentGetV30OrderField, ToolsCommentGetV30OrderType, ToolsCommentGetV30Response } from "../models";


export class ToolsCommentGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentGetGet(advertiserId: number, startTime: string, endTime: string, orderField: ToolsCommentGetV30OrderField, orderType: ToolsCommentGetV30OrderType, filtering: ToolsCommentGetV30Filtering, page: number, pageSize: number): Promise<ToolsCommentGetV30Response> {
    const response = await this.openApiV30ToolsCommentGetGetWithHttpInfo(advertiserId, startTime, endTime, orderField, orderType, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsCommentGetGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, orderField: ToolsCommentGetV30OrderField, orderType: ToolsCommentGetV30OrderType, filtering: ToolsCommentGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsCommentGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


