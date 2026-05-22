// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageUpdateV2Request, ToolsAppManagementExtendPackageUpdateV2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageUpdateV2ApiOpenApi2ToolsAppManagementExtendPackageUpdatePostRequest {
  toolsAppManagementExtendPackageUpdateV2Request?: ToolsAppManagementExtendPackageUpdateV2Request;
}

export class ToolsAppManagementExtendPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageUpdatePost(request: ToolsAppManagementExtendPackageUpdateV2ApiOpenApi2ToolsAppManagementExtendPackageUpdatePostRequest): Promise<ToolsAppManagementExtendPackageUpdateV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageUpdatePostWithHttpInfo(request: ToolsAppManagementExtendPackageUpdateV2ApiOpenApi2ToolsAppManagementExtendPackageUpdatePostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementExtendPackageUpdateV2Request
    });
  }
}


