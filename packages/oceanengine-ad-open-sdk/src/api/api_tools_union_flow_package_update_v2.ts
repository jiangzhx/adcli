// Generated from oceanengine/ad_open_sdk_go api/api_tools_union_flow_package_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsUnionFlowPackageUpdateV2Request, ToolsUnionFlowPackageUpdateV2Response } from "../models/index";


export interface ToolsUnionFlowPackageUpdateV2ApiOpenApi2ToolsUnionFlowPackageUpdatePostRequest {
  toolsUnionFlowPackageUpdateV2Request?: ToolsUnionFlowPackageUpdateV2Request;
}

export class ToolsUnionFlowPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageUpdatePost(request: ToolsUnionFlowPackageUpdateV2ApiOpenApi2ToolsUnionFlowPackageUpdatePostRequest): Promise<ToolsUnionFlowPackageUpdateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request: ToolsUnionFlowPackageUpdateV2ApiOpenApi2ToolsUnionFlowPackageUpdatePostRequest): Promise<ApiResponse<ToolsUnionFlowPackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsUnionFlowPackageUpdateV2Request
    });
  }
}


