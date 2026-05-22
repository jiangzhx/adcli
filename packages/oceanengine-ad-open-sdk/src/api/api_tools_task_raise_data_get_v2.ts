// Generated from oceanengine/ad_open_sdk_go api/api_tools_task_raise_data_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsTaskRaiseDataGetV2Response } from "../models/index";


export interface ToolsTaskRaiseDataGetV2ApiOpenApi2ToolsTaskRaiseDataGetGetRequest {
  advertiserId: number | string;
  reportId: number | string;
}

export class ToolsTaskRaiseDataGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseDataGetGet(request: ToolsTaskRaiseDataGetV2ApiOpenApi2ToolsTaskRaiseDataGetGetRequest): Promise<ToolsTaskRaiseDataGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseDataGetGetWithHttpInfo(request: ToolsTaskRaiseDataGetV2ApiOpenApi2ToolsTaskRaiseDataGetGetRequest): Promise<ApiResponse<ToolsTaskRaiseDataGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.reportId == null) {
      throw new ApiException("reportId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseDataGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "report_id", value: request.reportId }
      ]
    });
  }
}


