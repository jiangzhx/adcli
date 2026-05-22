// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageCreateV2V2Request, ToolsAppManagementExtendPackageCreateV2V2Response } from "../models";


export interface OpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest {
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

  async openApi2ToolsAppManagementExtendPackageCreateV2Post(request: OpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest): Promise<ToolsAppManagementExtendPackageCreateV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(request: OpenApi2ToolsAppManagementExtendPackageCreateV2PostRequest): Promise<ApiResponse<ToolsAppManagementExtendPackageCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/create_v2/",
      queryParams: [

      ],
      body: request.toolsAppManagementExtendPackageCreateV2V2Request
    });
  }
}


