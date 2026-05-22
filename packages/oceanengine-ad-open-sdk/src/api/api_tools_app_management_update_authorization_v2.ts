// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_update_authorization_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementUpdateAuthorizationV2Request, ToolsAppManagementUpdateAuthorizationV2Response } from "../models/index";


export interface ToolsAppManagementUpdateAuthorizationV2ApiOpenApi2ToolsAppManagementUpdateAuthorizationPostRequest {
  toolsAppManagementUpdateAuthorizationV2Request?: ToolsAppManagementUpdateAuthorizationV2Request;
}

export class ToolsAppManagementUpdateAuthorizationV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUpdateAuthorizationPost(request: ToolsAppManagementUpdateAuthorizationV2ApiOpenApi2ToolsAppManagementUpdateAuthorizationPostRequest): Promise<ToolsAppManagementUpdateAuthorizationV2Response> {
    const response = await this.openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(request: ToolsAppManagementUpdateAuthorizationV2ApiOpenApi2ToolsAppManagementUpdateAuthorizationPostRequest): Promise<ApiResponse<ToolsAppManagementUpdateAuthorizationV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUpdateAuthorizationV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/update/authorization/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementUpdateAuthorizationV2Request
    });
  }
}


