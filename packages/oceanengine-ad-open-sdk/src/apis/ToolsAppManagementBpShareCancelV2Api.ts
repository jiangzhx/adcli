// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementBpShareCancelV2Request, ToolsAppManagementBpShareCancelV2Response } from "../models";


export class ToolsAppManagementBpShareCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBpShareCancelPost(toolsAppManagementBpShareCancelV2Request: ToolsAppManagementBpShareCancelV2Request): Promise<ToolsAppManagementBpShareCancelV2Response> {
    const response = await this.openApi2ToolsAppManagementBpShareCancelPostWithHttpInfo(toolsAppManagementBpShareCancelV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementBpShareCancelPostWithHttpInfo(toolsAppManagementBpShareCancelV2Request: ToolsAppManagementBpShareCancelV2Request): Promise<ApiResponse<ToolsAppManagementBpShareCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBpShareCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/bp_share/cancel/",
      queryParams: [

      ],
      body: toolsAppManagementBpShareCancelV2Request
    });
  }
}


