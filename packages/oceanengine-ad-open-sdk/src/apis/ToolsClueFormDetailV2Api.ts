// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueFormDetailV2Response } from "../models";


export interface OpenApi2ToolsClueFormDetailGetRequest {
  advertiserId: number;
  instanceId: number;
}

export class ToolsClueFormDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueFormDetailGet(request: OpenApi2ToolsClueFormDetailGetRequest): Promise<ToolsClueFormDetailV2Response> {
    const response = await this.openApi2ToolsClueFormDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueFormDetailGetWithHttpInfo(request: OpenApi2ToolsClueFormDetailGetRequest): Promise<ApiResponse<ToolsClueFormDetailV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueFormDetailGet");
    }

    if (request.instanceId == null) {
      throw new ApiException("Missing the required parameter 'instanceId' when calling openApi2ToolsClueFormDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueFormDetailV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/form/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "instance_id", value: request.instanceId }
      ]
    });
  }
}


