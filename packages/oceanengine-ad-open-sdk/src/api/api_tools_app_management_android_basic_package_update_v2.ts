// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_android_basic_package_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementAndroidBasicPackageUpdateV2Request, ToolsAppManagementAndroidBasicPackageUpdateV2Response } from "../models/index";


export interface ToolsAppManagementAndroidBasicPackageUpdateV2ApiOpenApi2ToolsAppManagementAndroidBasicPackageUpdatePostRequest {
  toolsAppManagementAndroidBasicPackageUpdateV2Request?: ToolsAppManagementAndroidBasicPackageUpdateV2Request;
}

export class ToolsAppManagementAndroidBasicPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageUpdatePost(request: ToolsAppManagementAndroidBasicPackageUpdateV2ApiOpenApi2ToolsAppManagementAndroidBasicPackageUpdatePostRequest): Promise<ToolsAppManagementAndroidBasicPackageUpdateV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageUpdatePostWithHttpInfo(request: ToolsAppManagementAndroidBasicPackageUpdateV2ApiOpenApi2ToolsAppManagementAndroidBasicPackageUpdatePostRequest): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/android_basic_package/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementAndroidBasicPackageUpdateV2Request
    });
  }
}


