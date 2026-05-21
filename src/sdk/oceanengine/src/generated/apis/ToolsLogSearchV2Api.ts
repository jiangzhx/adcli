// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsLogSearchV2Response } from "../models";


export class ToolsLogSearchV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLogSearchGet(advertiserId: number, objectId: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ToolsLogSearchV2Response> {
    const response = await this.openApi2ToolsLogSearchGetWithHttpInfo(advertiserId, objectId, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApi2ToolsLogSearchGetWithHttpInfo(advertiserId: number, objectId: number[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<ToolsLogSearchV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsLogSearchGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsLogSearchV2Response>({
      method: "GET",
      path: "/open_api/2/tools/log_search/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "object_id", value: objectId, collectionFormat: "csv" }
      ]
    });
  }
}


