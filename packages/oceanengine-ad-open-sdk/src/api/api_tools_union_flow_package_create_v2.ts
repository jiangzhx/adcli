// Generated from oceanengine/ad_open_sdk_go api/api_tools_union_flow_package_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsUnionFlowPackageCreateV2Request, ToolsUnionFlowPackageCreateV2Response } from "../models/index";


export interface ToolsUnionFlowPackageCreateV2ApiOpenApi2ToolsUnionFlowPackageCreatePostRequest {
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

  async openApi2ToolsUnionFlowPackageCreatePost(request: ToolsUnionFlowPackageCreateV2ApiOpenApi2ToolsUnionFlowPackageCreatePostRequest): Promise<ToolsUnionFlowPackageCreateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageCreatePostWithHttpInfo(request: ToolsUnionFlowPackageCreateV2ApiOpenApi2ToolsUnionFlowPackageCreatePostRequest): Promise<ApiResponse<ToolsUnionFlowPackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsUnionFlowPackageCreateV2Request
    });
  }
}


