// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageUpdateV2V2Request, ToolsAppManagementExtendPackageUpdateV2V2Response } from "../models";


export interface OpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest {
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

  async openApi2ToolsAppManagementExtendPackageUpdateV2Post(request: OpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest): Promise<ToolsAppManagementExtendPackageUpdateV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageUpdateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageUpdateV2PostWithHttpInfo(request: OpenApi2ToolsAppManagementExtendPackageUpdateV2PostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageUpdateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageUpdateV2V2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/update_v2/",
      queryParams: [

      ],
      body: request.toolsAppManagementExtendPackageUpdateV2V2Request
    });
  }
}


