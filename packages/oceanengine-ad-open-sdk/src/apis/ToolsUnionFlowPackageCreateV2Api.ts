// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageCreateV2Request, ToolsUnionFlowPackageCreateV2Response } from "../models";


export interface OpenApi2ToolsUnionFlowPackageCreatePostRequest {
  toolsUnionFlowPackageCreateV2Request?: ToolsUnionFlowPackageCreateV2Request;
}

export class ToolsUnionFlowPackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageCreatePost(request: OpenApi2ToolsUnionFlowPackageCreatePostRequest): Promise<ToolsUnionFlowPackageCreateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(request: OpenApi2ToolsUnionFlowPackageCreatePostRequest): Promise<ApiResponse<ToolsUnionFlowPackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/create/",
      queryParams: [

      ],
      body: request.toolsUnionFlowPackageCreateV2Request
    });
  }
}


