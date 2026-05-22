// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentGetV30Filtering, ToolsCommentGetV30OrderField, ToolsCommentGetV30OrderType, ToolsCommentGetV30Response } from "../models";


export interface OpenApiV30ToolsCommentGetGetRequest {
  advertiserId: number;
  startTime: string;
  endTime: string;
  orderField?: ToolsCommentGetV30OrderField;
  orderType?: ToolsCommentGetV30OrderType;
  filtering?: ToolsCommentGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsCommentGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentGetGet(request: OpenApiV30ToolsCommentGetGetRequest): Promise<ToolsCommentGetV30Response> {
    const response = await this.openApiV30ToolsCommentGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentGetGetWithHttpInfo(request: OpenApiV30ToolsCommentGetGetRequest): Promise<ApiResponse<ToolsCommentGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


