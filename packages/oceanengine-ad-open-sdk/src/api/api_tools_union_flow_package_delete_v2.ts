// Generated from oceanengine/ad_open_sdk_go api/api_tools_union_flow_package_delete_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsUnionFlowPackageDeleteV2Request, ToolsUnionFlowPackageDeleteV2Response } from "../models/index";


export interface ToolsUnionFlowPackageDeleteV2ApiOpenApi2ToolsUnionFlowPackageDeletePostRequest {
  toolsUnionFlowPackageDeleteV2Request?: ToolsUnionFlowPackageDeleteV2Request;
}

export class ToolsUnionFlowPackageDeleteV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageDeletePost(request: ToolsUnionFlowPackageDeleteV2ApiOpenApi2ToolsUnionFlowPackageDeletePostRequest): Promise<ToolsUnionFlowPackageDeleteV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageDeletePostWithHttpInfo(request: ToolsUnionFlowPackageDeleteV2ApiOpenApi2ToolsUnionFlowPackageDeletePostRequest): Promise<ApiResponse<ToolsUnionFlowPackageDeleteV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageDeleteV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsUnionFlowPackageDeleteV2Request
    });
  }
}


