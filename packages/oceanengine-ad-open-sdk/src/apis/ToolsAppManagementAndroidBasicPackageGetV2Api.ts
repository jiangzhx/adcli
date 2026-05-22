// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidBasicPackageGetV2AccountType, ToolsAppManagementAndroidBasicPackageGetV2Response } from "../models";


export interface OpenApi2ToolsAppManagementAndroidBasicPackageGetGetRequest {
  accountId: number | string;
  accountType: ToolsAppManagementAndroidBasicPackageGetV2AccountType;
  packageId: string;
}

export class ToolsAppManagementAndroidBasicPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageGetGet(request: OpenApi2ToolsAppManagementAndroidBasicPackageGetGetRequest): Promise<ToolsAppManagementAndroidBasicPackageGetV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageGetGetWithHttpInfo(request: OpenApi2ToolsAppManagementAndroidBasicPackageGetGetRequest): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackageGetV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/android_basic_package/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "package_id", value: request.packageId }
      ]
    });
  }
}


