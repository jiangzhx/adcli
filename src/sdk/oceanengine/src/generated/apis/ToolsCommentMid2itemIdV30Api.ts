// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsCommentMid2itemIdV30Response } from "../models";


export class ToolsCommentMid2itemIdV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsCommentMid2itemIdGet(advertiserId: number, startTime: string, endTime: string, materialId: number, page: number, pageSize: number): Promise<ToolsCommentMid2itemIdV30Response> {
    const response = await this.openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(advertiserId, startTime, endTime, materialId, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsCommentMid2itemIdGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, materialId: number, page: number, pageSize: number): Promise<ApiResponse<ToolsCommentMid2itemIdV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30ToolsCommentMid2itemIdGet");
    }

    if (materialId == null) {
      throw new ApiException("Missing the required parameter 'materialId' when calling openApiV30ToolsCommentMid2itemIdGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsCommentMid2itemIdV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/comment/mid2item_id/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "material_id", value: materialId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


