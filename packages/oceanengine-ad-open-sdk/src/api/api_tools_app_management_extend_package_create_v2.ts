// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageCreateV2Request, ToolsAppManagementExtendPackageCreateV2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageCreateV2ApiOpenApi2ToolsAppManagementExtendPackageCreatePostRequest {
  toolsAppManagementExtendPackageCreateV2Request?: ToolsAppManagementExtendPackageCreateV2Request;
}

export class ToolsAppManagementExtendPackageCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageCreatePost(request: ToolsAppManagementExtendPackageCreateV2ApiOpenApi2ToolsAppManagementExtendPackageCreatePostRequest): Promise<ToolsAppManagementExtendPackageCreateV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageCreatePostWithHttpInfo(request: ToolsAppManagementExtendPackageCreateV2ApiOpenApi2ToolsAppManagementExtendPackageCreatePostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementExtendPackageCreateV2Request
    });
  }
}


