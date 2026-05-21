// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsUnionFlowPackageDeleteV2Request, ToolsUnionFlowPackageDeleteV2Response } from "../models";


export class ToolsUnionFlowPackageDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageDeletePost(toolsUnionFlowPackageDeleteV2Request: ToolsUnionFlowPackageDeleteV2Request): Promise<ToolsUnionFlowPackageDeleteV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageDeletePostWithHttpInfo(toolsUnionFlowPackageDeleteV2Request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageDeletePostWithHttpInfo(toolsUnionFlowPackageDeleteV2Request: ToolsUnionFlowPackageDeleteV2Request): Promise<ApiResponse<ToolsUnionFlowPackageDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/delete/",
      queryParams: [

      ],
      body: toolsUnionFlowPackageDeleteV2Request
    });
  }
}


