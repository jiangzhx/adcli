// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion, ToolsTaskRaiseOptimizationIdsGetV2Response } from "../models";


export class ToolsTaskRaiseOptimizationIdsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseOptimizationIdsGetGet(advertiserId: number, platformVersion: ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion): Promise<ToolsTaskRaiseOptimizationIdsGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseOptimizationIdsGetGetWithHttpInfo(advertiserId, platformVersion);
    return response.data;
  }

  async openApi2ToolsTaskRaiseOptimizationIdsGetGetWithHttpInfo(advertiserId: number, platformVersion: ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion): Promise<ApiResponse<ToolsTaskRaiseOptimizationIdsGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsTaskRaiseOptimizationIdsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseOptimizationIdsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/optimization_ids/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "platform_version", value: platformVersion }
      ]
    });
  }
}


