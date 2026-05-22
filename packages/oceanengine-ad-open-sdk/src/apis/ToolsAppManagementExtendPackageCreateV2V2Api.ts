// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageCreateV2V2Request, ToolsAppManagementExtendPackageCreateV2V2Response } from "../models";


export class ToolsAppManagementExtendPackageCreateV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageCreateV2Post(toolsAppManagementExtendPackageCreateV2V2Request: ToolsAppManagementExtendPackageCreateV2V2Request): Promise<ToolsAppManagementExtendPackageCreateV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(toolsAppManagementExtendPackageCreateV2V2Request);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageCreateV2PostWithHttpInfo(toolsAppManagementExtendPackageCreateV2V2Request: ToolsAppManagementExtendPackageCreateV2V2Request): Promise<ApiResponse<ToolsAppManagementExtendPackageCreateV2V2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageCreateV2V2Response>({
      method: "POST",
      path: "/open_api/2/tools/app_management/extend_package/create_v2/",
      queryParams: [

      ],
      body: toolsAppManagementExtendPackageCreateV2V2Request
    });
  }
}


