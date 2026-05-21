// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsUnionFlowPackageCreateV2Request, ToolsUnionFlowPackageCreateV2Response } from "../models";


export class ToolsUnionFlowPackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageCreatePost(toolsUnionFlowPackageCreateV2Request: ToolsUnionFlowPackageCreateV2Request): Promise<ToolsUnionFlowPackageCreateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(toolsUnionFlowPackageCreateV2Request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(toolsUnionFlowPackageCreateV2Request: ToolsUnionFlowPackageCreateV2Request): Promise<ApiResponse<ToolsUnionFlowPackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/create/",
      queryParams: [

      ],
      body: toolsUnionFlowPackageCreateV2Request
    });
  }
}


