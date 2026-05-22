// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsTaskRaiseGetV2PlatformVersion, ToolsTaskRaiseGetV2Response } from "../models";


export interface OpenApi2ToolsTaskRaiseGetGetRequest {
  advertiserId: number;
  page: number;
  pageSize: number;
  platformVersion?: ToolsTaskRaiseGetV2PlatformVersion;
}

export class ToolsTaskRaiseGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsTaskRaiseGetGet(request: OpenApi2ToolsTaskRaiseGetGetRequest): Promise<ToolsTaskRaiseGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseGetGetWithHttpInfo(request: OpenApi2ToolsTaskRaiseGetGetRequest): Promise<ApiResponse<ToolsTaskRaiseGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsTaskRaiseGetGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2ToolsTaskRaiseGetGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2ToolsTaskRaiseGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsTaskRaiseGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/task_raise/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "platform_version", value: request.platformVersion }
      ]
    });
  }
}


