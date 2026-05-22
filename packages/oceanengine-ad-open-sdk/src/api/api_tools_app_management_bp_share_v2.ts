// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_bp_share_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementBpShareV2Request, ToolsAppManagementBpShareV2Response } from "../models/index";


export interface ToolsAppManagementBpShareV2ApiOpenApi2ToolsAppManagementBpSharePostRequest {
  toolsAppManagementBpShareV2Request?: ToolsAppManagementBpShareV2Request;
}

export class ToolsAppManagementBpShareV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBpSharePost(request: ToolsAppManagementBpShareV2ApiOpenApi2ToolsAppManagementBpSharePostRequest): Promise<ToolsAppManagementBpShareV2Response> {
    const response = await this.openApi2ToolsAppManagementBpSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementBpSharePostWithHttpInfo(request: ToolsAppManagementBpShareV2ApiOpenApi2ToolsAppManagementBpSharePostRequest): Promise<ApiResponse<ToolsAppManagementBpShareV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBpShareV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/bp_share/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementBpShareV2Request
    });
  }
}


