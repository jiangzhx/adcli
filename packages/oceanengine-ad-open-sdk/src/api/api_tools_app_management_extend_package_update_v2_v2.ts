// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_update_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageUpdateV2V2Request, ToolsAppManagementExtendPackageUpdateV2V2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageUpdateV2V2ApiOpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest {
  toolsAppManagementExtendPackageUpdateV2V2Request?: ToolsAppManagementExtendPackageUpdateV2V2Request;
}

export class ToolsAppManagementExtendPackageUpdateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageUpdateV2Post(request: ToolsAppManagementExtendPackageUpdateV2V2ApiOpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest): Promise<ToolsAppManagementExtendPackageUpdateV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageUpdateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageUpdateV2PostWithHttpInfo(request: ToolsAppManagementExtendPackageUpdateV2V2ApiOpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageUpdateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageUpdateV2V2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/update_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementExtendPackageUpdateV2V2Request
    });
  }
}


