// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidBasicPackagePublishV2Request, ToolsAppManagementAndroidBasicPackagePublishV2Response } from "../models";


export interface OpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest {
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

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPost(request: OpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest): Promise<ToolsAppManagementAndroidBasicPackagePublishV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackagePublishPostWithHttpInfo(request: OpenApi2ToolsAppManagementAndroidBasicPackagePublishPostRequest): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackagePublishV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackagePublishV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/android_basic_package/publish/",
      queryParams: [

      ],
      body: request.toolsAppManagementAndroidBasicPackagePublishV2Request
    });
  }
}


