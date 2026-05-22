// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementUpdateAuthorizationV2Request, ToolsAppManagementUpdateAuthorizationV2Response } from "../models";


export interface OpenApi2ToolsAppManagementUpdateAuthorizationPostRequest {
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

  async openApi2ToolsAppManagementUpdateAuthorizationPost(request: OpenApi2ToolsAppManagementUpdateAuthorizationPostRequest): Promise<ToolsAppManagementUpdateAuthorizationV2Response> {
    const response = await this.openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(request: OpenApi2ToolsAppManagementUpdateAuthorizationPostRequest): Promise<ApiResponse<ToolsAppManagementUpdateAuthorizationV2Response>> {

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


