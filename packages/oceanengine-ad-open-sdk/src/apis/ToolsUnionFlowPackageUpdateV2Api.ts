// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsUnionFlowPackageUpdateV2Request, ToolsUnionFlowPackageUpdateV2Response } from "../models";


export class ToolsUnionFlowPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsUnionFlowPackageUpdatePost(request: ToolsUnionFlowPackageUpdateV2Request): Promise<ToolsUnionFlowPackageUpdateV2Response> {
    const response = await this.openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsUnionFlowPackageUpdatePostWithHttpInfo(request: ToolsUnionFlowPackageUpdateV2Request): Promise<ApiResponse<ToolsUnionFlowPackageUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsUnionFlowPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/union/flow_package/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


