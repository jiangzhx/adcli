// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementAndroidAppListV2AccountAssetQueryScope, ToolsAppManagementAndroidAppListV2AccountType, ToolsAppManagementAndroidAppListV2Filtering, ToolsAppManagementAndroidAppListV2Response } from "../models";


export interface OpenApi2ToolsAppManagementAndroidAppListGetRequest {
  accountId: number | string;
  accountType: ToolsAppManagementAndroidAppListV2AccountType;
  page?: number;
  pageSize?: number;
  filtering?: ToolsAppManagementAndroidAppListV2Filtering;
  accountAssetQueryScope?: ToolsAppManagementAndroidAppListV2AccountAssetQueryScope;
}

export class ToolsAppManagementAndroidAppListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementAndroidAppListGet(request: OpenApi2ToolsAppManagementAndroidAppListGetRequest): Promise<ToolsAppManagementAndroidAppListV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(request: OpenApi2ToolsAppManagementAndroidAppListGetRequest): Promise<ApiResponse<ToolsAppManagementAndroidAppListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementAndroidAppListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementAndroidAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementAndroidAppListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/android_app/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


