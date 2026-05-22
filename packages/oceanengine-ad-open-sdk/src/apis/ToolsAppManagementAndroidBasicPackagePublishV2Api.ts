// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidBasicPackagePublishV2Request, ToolsAppManagementAndroidBasicPackagePublishV2Response } from "../models";


export class ToolsAppManagementAndroidBasicPackagePublishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPost(toolsAppManagementAndroidBasicPackagePublishV2Request: ToolsAppManagementAndroidBasicPackagePublishV2Request): Promise<ToolsAppManagementAndroidBasicPackagePublishV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(toolsAppManagementAndroidBasicPackagePublishV2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(toolsAppManagementAndroidBasicPackagePublishV2Request: ToolsAppManagementAndroidBasicPackagePublishV2Request): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackagePublishV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackagePublishV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/android_basic_package/publish/",
      queryParams: [

      ],
      body: toolsAppManagementAndroidBasicPackagePublishV2Request
    });
  }
}


