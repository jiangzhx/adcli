// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidBasicPackageUpdateV2Request, ToolsAppManagementAndroidBasicPackageUpdateV2Response } from "../models";


export class ToolsAppManagementAndroidBasicPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageUpdatePost(toolsAppManagementAndroidBasicPackageUpdateV2Request: ToolsAppManagementAndroidBasicPackageUpdateV2Request): Promise<ToolsAppManagementAndroidBasicPackageUpdateV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackageUpdatePostWithHttpInfo(toolsAppManagementAndroidBasicPackageUpdateV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageUpdatePostWithHttpInfo(toolsAppManagementAndroidBasicPackageUpdateV2Request: ToolsAppManagementAndroidBasicPackageUpdateV2Request): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/android_basic_package/update/",
      queryParams: [

      ],
      body: toolsAppManagementAndroidBasicPackageUpdateV2Request
    });
  }
}


