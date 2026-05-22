// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_extend_package_create_v2_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementExtendPackageCreateV2V2Request, ToolsAppManagementExtendPackageCreateV2V2Response } from "../models/index";


export interface ToolsAppManagementExtendPackageCreateV2V2ApiOpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest {
  toolsAppManagementExtendPackageCreateV2V2Request?: ToolsAppManagementExtendPackageCreateV2V2Request;
}

export class ToolsAppManagementExtendPackageCreateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageCreateV2Post(request: ToolsAppManagementExtendPackageCreateV2V2ApiOpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest): Promise<ToolsAppManagementExtendPackageCreateV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(request: ToolsAppManagementExtendPackageCreateV2V2ApiOpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/create_v2/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsAppManagementExtendPackageCreateV2V2Request
    });
  }
}


