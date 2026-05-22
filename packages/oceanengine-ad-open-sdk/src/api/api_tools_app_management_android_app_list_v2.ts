// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_android_app_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementAndroidAppListV2AccountAssetQueryScope, ToolsAppManagementAndroidAppListV2AccountType, ToolsAppManagementAndroidAppListV2Filtering, ToolsAppManagementAndroidAppListV2Response } from "../models/index";


export interface ToolsAppManagementAndroidAppListV2ApiOpenApi2ToolsAppManagementAndroidAppListGetRequest {
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

  async openApi2ToolsAppManagementAndroidAppListGet(request: ToolsAppManagementAndroidAppListV2ApiOpenApi2ToolsAppManagementAndroidAppListGetRequest): Promise<ToolsAppManagementAndroidAppListV2Response> {
    const response = await this.openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementAndroidAppListGetWithHttpInfo(request: ToolsAppManagementAndroidAppListV2ApiOpenApi2ToolsAppManagementAndroidAppListGetRequest): Promise<ApiResponse<ToolsAppManagementAndroidAppListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
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


