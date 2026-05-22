// Generated from oceanengine/ad_open_sdk_go api/api_tools_comment_mid2item_id_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsCommentMid2itemIdV30Response } from "../models/index";


export interface ToolsCommentMid2itemIdV30ApiOpenApiV30ToolsCommentMid2itemIdGetRequest {
  advertiserId: number | string;
  startTime: string;
  endTime: string;
  materialId: number | string;
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

  async openApiV30ToolsCommentMid2itemIdGet(request: ToolsCommentMid2itemIdV30ApiOpenApiV30ToolsCommentMid2itemIdGetRequest): Promise<ToolsCommentMid2itemIdV30Response> {
    const response = await this.openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(request: ToolsCommentMid2itemIdV30ApiOpenApiV30ToolsCommentMid2itemIdGetRequest): Promise<ApiResponse<ToolsCommentMid2itemIdV30Response>> {
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


