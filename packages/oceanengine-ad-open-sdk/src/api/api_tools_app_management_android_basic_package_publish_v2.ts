// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_android_basic_package_publish_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementAndroidBasicPackagePublishV2Request, ToolsAppManagementAndroidBasicPackagePublishV2Response } from "../models/index";


export interface ToolsAppManagementAndroidBasicPackagePublishV2ApiOpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest {
  toolsAppManagementAndroidBasicPackagePublishV2Request?: ToolsAppManagementAndroidBasicPackagePublishV2Request;
}

export class ToolsAppManagementAndroidBasicPackagePublishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPost(request: ToolsAppManagementAndroidBasicPackagePublishV2ApiOpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest): Promise<ToolsAppManagementAndroidBasicPackagePublishV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(request: ToolsAppManagementAndroidBasicPackagePublishV2ApiOpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackagePublishV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackagePublishV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/android_basic_package/publish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementAndroidBasicPackagePublishV2Request
    });
  }
}


