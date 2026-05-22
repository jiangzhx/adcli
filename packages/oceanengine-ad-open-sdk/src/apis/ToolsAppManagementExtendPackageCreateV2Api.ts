// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageCreateV2Request, ToolsAppManagementExtendPackageCreateV2Response } from "../models";


export class ToolsAppManagementExtendPackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageCreatePost(toolsAppManagementExtendPackageCreateV2Request: ToolsAppManagementExtendPackageCreateV2Request): Promise<ToolsAppManagementExtendPackageCreateV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageCreatePostWithHttpInfo(toolsAppManagementExtendPackageCreateV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageCreatePostWithHttpInfo(toolsAppManagementExtendPackageCreateV2Request: ToolsAppManagementExtendPackageCreateV2Request): Promise<ApiResponse<ToolsAppManagementExtendPackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/create/",
      queryParams: [

      ],
      body: toolsAppManagementExtendPackageCreateV2Request
    });
  }
}


