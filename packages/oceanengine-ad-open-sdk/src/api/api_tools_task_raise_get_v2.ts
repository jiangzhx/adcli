// Generated from oceanengine/ad_open_sdk_go api/api_tools_task_raise_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsTaskRaiseGetV2PlatformVersion, ToolsTaskRaiseGetV2Response } from "../models/index";


export interface ToolsTaskRaiseGetV2ApiOpenApi2ToolsTaskRaiseGetGetRequest {
  advertiserId: number | string;
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

  async openApi2ToolsTaskRaiseGetGet(request: ToolsTaskRaiseGetV2ApiOpenApi2ToolsTaskRaiseGetGetRequest): Promise<ToolsTaskRaiseGetV2Response> {
    const response = await this.openApi2ToolsTaskRaiseGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsTaskRaiseGetGetWithHttpInfo(request: ToolsTaskRaiseGetV2ApiOpenApi2ToolsTaskRaiseGetGetRequest): Promise<ApiResponse<ToolsTaskRaiseGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 99999) {
      throw new ApiException("page must be less than 99999");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 1) {
      throw new ApiException("pageSize must be greater than 1");
    }

    if (request.pageSize != null && Number(request.pageSize) > 100) {
      throw new ApiException("pageSize must be less than 100");
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


