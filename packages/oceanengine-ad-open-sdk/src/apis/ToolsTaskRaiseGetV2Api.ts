// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsTaskRaiseGetV2PlatformVersion, ToolsTaskRaiseGetV2Response } from "../models";


export class ToolsTaskRaiseGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseGetGet(advertiserId: number, page: number, pageSize: number, platformVersion: ToolsTaskRaiseGetV2PlatformVersion): Promise<ToolsTaskRaiseGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseGetGetWithHttpInfo(advertiserId, page, pageSize, platformVersion);
    return response.data;
  }

  async openApi2ToolsTaskRaiseGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, platformVersion: ToolsTaskRaiseGetV2PlatformVersion): Promise<ApiResponse<ToolsTaskRaiseGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsTaskRaiseGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2ToolsTaskRaiseGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2ToolsTaskRaiseGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "platform_version", value: platformVersion }
      ]
    });
  }
}


