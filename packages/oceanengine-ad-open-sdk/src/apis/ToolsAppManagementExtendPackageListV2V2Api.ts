// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementExtendPackageListV2V2AccountType, ToolsAppManagementExtendPackageListV2V2Filtering, ToolsAppManagementExtendPackageListV2V2Response } from "../models";


export class ToolsAppManagementExtendPackageListV2V2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementExtendPackageListV2Get(accountId: number, accountType: ToolsAppManagementExtendPackageListV2V2AccountType, packageId: string, page: number, pageSize: number, filtering: ToolsAppManagementExtendPackageListV2V2Filtering): Promise<ToolsAppManagementExtendPackageListV2V2Response> {
    const response = await this.openApi2ToolsAppManagementExtendPackageListV2GetWithHttpInfo(accountId, accountType, packageId, page, pageSize, filtering);
    return response.data;
  }

  async openApi2ToolsAppManagementExtendPackageListV2GetWithHttpInfo(accountId: number, accountType: ToolsAppManagementExtendPackageListV2V2AccountType, packageId: string, page: number, pageSize: number, filtering: ToolsAppManagementExtendPackageListV2V2Filtering): Promise<ApiResponse<ToolsAppManagementExtendPackageListV2V2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }

    if (packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApi2ToolsAppManagementExtendPackageListV2Get");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementExtendPackageListV2V2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/extend_package/list_v2/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "package_id", value: packageId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


