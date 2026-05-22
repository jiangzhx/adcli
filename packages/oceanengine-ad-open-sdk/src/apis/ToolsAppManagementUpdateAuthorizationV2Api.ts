// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementUpdateAuthorizationV2Request, ToolsAppManagementUpdateAuthorizationV2Response } from "../models";


export class ToolsAppManagementUpdateAuthorizationV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementUpdateAuthorizationPost(toolsAppManagementUpdateAuthorizationV2Request: ToolsAppManagementUpdateAuthorizationV2Request): Promise<ToolsAppManagementUpdateAuthorizationV2Response> {
    const response = await this.openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(toolsAppManagementUpdateAuthorizationV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementUpdateAuthorizationPostWithHttpInfo(toolsAppManagementUpdateAuthorizationV2Request: ToolsAppManagementUpdateAuthorizationV2Request): Promise<ApiResponse<ToolsAppManagementUpdateAuthorizationV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementUpdateAuthorizationV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/update/authorization/",
      queryParams: [

      ],
      body: toolsAppManagementUpdateAuthorizationV2Request
    });
  }
}


