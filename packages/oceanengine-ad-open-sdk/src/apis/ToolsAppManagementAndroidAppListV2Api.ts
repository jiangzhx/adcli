// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidAppListV2AccountAssetQueryScope, ToolsAppManagementAndroidAppListV2AccountType, ToolsAppManagementAndroidAppListV2Filtering, ToolsAppManagementAndroidAppListV2Response } from "../models";


export class ToolsAppManagementAndroidAppListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidAppListGet(accountId: number, accountType: ToolsAppManagementAndroidAppListV2AccountType, page: number, pageSize: number, filtering: ToolsAppManagementAndroidAppListV2Filtering, accountAssetQueryScope: ToolsAppManagementAndroidAppListV2AccountAssetQueryScope): Promise<ToolsAppManagementAndroidAppListV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(accountId, accountType, page, pageSize, filtering, accountAssetQueryScope);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(accountId: number, accountType: ToolsAppManagementAndroidAppListV2AccountType, page: number, pageSize: number, filtering: ToolsAppManagementAndroidAppListV2Filtering, accountAssetQueryScope: ToolsAppManagementAndroidAppListV2AccountAssetQueryScope): Promise<ApiResponse<ToolsAppManagementAndroidAppListV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementAndroidAppListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementAndroidAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidAppListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/android_app/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering },
        { name: "account_asset_query_scope", value: accountAssetQueryScope }
      ]
    });
  }
}


