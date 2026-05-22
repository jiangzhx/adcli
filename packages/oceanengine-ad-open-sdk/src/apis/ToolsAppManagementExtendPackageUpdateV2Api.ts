// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageUpdateV2Request, ToolsAppManagementExtendPackageUpdateV2Response } from "../models";


export class ToolsAppManagementExtendPackageUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageUpdatePost(request: ToolsAppManagementExtendPackageUpdateV2Request): Promise<ToolsAppManagementExtendPackageUpdateV2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageUpdatePostWithHttpInfo(request: ToolsAppManagementExtendPackageUpdateV2Request): Promise<ApiResponse<ToolsAppManagementExtendPackageUpdateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


