// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsTaskRaiseDataGetV2Response } from "../models";


export class ToolsTaskRaiseDataGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseDataGetGet(advertiserId: number, reportId: number): Promise<ToolsTaskRaiseDataGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseDataGetGetWithHttpInfo(advertiserId, reportId);
    return response.data;
  }

  async openApi2ToolsTaskRaiseDataGetGetWithHttpInfo(advertiserId: number, reportId: number): Promise<ApiResponse<ToolsTaskRaiseDataGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsTaskRaiseDataGetGet");
    }

    if (reportId == null) {
      throw new ApiException("Missing the required parameter 'reportId' when calling openApi2ToolsTaskRaiseDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseDataGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "report_id", value: reportId }
      ]
    });
  }
}


