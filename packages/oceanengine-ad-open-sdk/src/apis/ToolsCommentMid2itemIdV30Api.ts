// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsCommentMid2itemIdV30Response } from "../models";


export interface OpenApiV30ToolsCommentMid2itemIdGetRequest {
  advertiserId: number;
  startTime: string;
  endTime: string;
  materialId: number;
  page?: number;
  pageSize?: number;
}

export class ToolsCommentMid2itemIdV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentMid2itemIdGet(request: OpenApiV30ToolsCommentMid2itemIdGetRequest): Promise<ToolsCommentMid2itemIdV30Response> {
    const response = await this.openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(request: OpenApiV30ToolsCommentMid2itemIdGetRequest): Promise<ApiResponse<ToolsCommentMid2itemIdV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (request.materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30ToolsCommentMid2itemIdGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentMid2itemIdV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/mid2item_id/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "material_id", value: request.materialId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


