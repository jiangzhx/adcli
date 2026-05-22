// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageUpdateV2Request, ToolsUnionFlowPackageUpdateV2Response } from "../models";


export interface OpenApi2ToolsUnionFlowPackageUpdatePostRequest {
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

  async openApi2ToolsUnionFlowPackageUpdatePost(request: OpenApi2ToolsUnionFlowPackageUpdatePostRequest): Promise<ToolsUnionFlowPackageUpdateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request: OpenApi2ToolsUnionFlowPackageUpdatePostRequest): Promise<ApiResponse<ToolsUnionFlowPackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/update/",
      queryParams: [

      ],
      body: request.toolsUnionFlowPackageUpdateV2Request
    });
  }
}


