// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_bp_share_cancel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementBpShareCancelV2Request, ToolsAppManagementBpShareCancelV2Response } from "../models/index";


export interface ToolsAppManagementBpShareCancelV2ApiOpenApi2ToolsAppManagementBpShareCancelPostRequest {
  toolsAppManagementBpShareCancelV2Request?: ToolsAppManagementBpShareCancelV2Request;
}

export class ToolsAppManagementBpShareCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBpShareCancelPost(request: ToolsAppManagementBpShareCancelV2ApiOpenApi2ToolsAppManagementBpShareCancelPostRequest): Promise<ToolsAppManagementBpShareCancelV2Response> {
    const response = await this.openApi2ToolsAppManagementBpShareCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementBpShareCancelPostWithHttpInfo(request: ToolsAppManagementBpShareCancelV2ApiOpenApi2ToolsAppManagementBpShareCancelPostRequest): Promise<ApiResponse<ToolsAppManagementBpShareCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBpShareCancelV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/bp_share/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementBpShareCancelV2Request
    });
  }
}


