// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAppManagementAndroidBasicPackageGetV2AccountType, ToolsAppManagementAndroidBasicPackageGetV2Response } from "../models";


export class ToolsAppManagementAndroidBasicPackageGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageGetGet(accountId: number, accountType: ToolsAppManagementAndroidBasicPackageGetV2AccountType, packageId: string): Promise<ToolsAppManagementAndroidBasicPackageGetV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidBasicPackageGetGetWithHttpInfo(accountId, accountType, packageId);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidBasicPackageGetGetWithHttpInfo(accountId: number, accountType: ToolsAppManagementAndroidBasicPackageGetV2AccountType, packageId: string): Promise<ApiResponse<ToolsAppManagementAndroidBasicPackageGetV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }

    if (packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementAndroidBasicPackageGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidBasicPackageGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/android_basic_package/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "package_id", value: packageId }
      ]
    });
  }
}


