// Generated from oceanengine/ad_open_sdk_go api/api_tools_task_raise_optimization_ids_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion, ToolsTaskRaiseOptimizationIdsGetV2Response } from "../models/index";


export interface ToolsTaskRaiseOptimizationIdsGetV2ApiOpenApi2ToolsTaskRaiseOptimizationIdsGetGetRequest {
  advertiserId: number | string;
  platformVersion?: ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion;
}

export class ToolsTaskRaiseOptimizationIdsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseOptimizationIdsGetGet(request: ToolsTaskRaiseOptimizationIdsGetV2ApiOpenApi2ToolsTaskRaiseOptimizationIdsGetGetRequest): Promise<ToolsTaskRaiseOptimizationIdsGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseOptimizationIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseOptimizationIdsGetGetWithHttpInfo(request: ToolsTaskRaiseOptimizationIdsGetV2ApiOpenApi2ToolsTaskRaiseOptimizationIdsGetGetRequest): Promise<ApiResponse<ToolsTaskRaiseOptimizationIdsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsTaskRaiseOptimizationIdsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseOptimizationIdsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/optimization_ids/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "platform_version", value: request.platformVersion }
      ]
    });
  }
}


