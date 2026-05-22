// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAppManagementHarmonyAppListV2AccountAssetQueryScope, ToolsAppManagementHarmonyAppListV2AccountType, ToolsAppManagementHarmonyAppListV2Filtering, ToolsAppManagementHarmonyAppListV2Response } from "../models";


export interface OpenApi2ToolsAppManagementHarmonyAppListGetRequest {
  accountId: number;
  accountType: ToolsAppManagementHarmonyAppListV2AccountType;
  page?: number;
  pageSize?: number;
  filtering?: ToolsAppManagementHarmonyAppListV2Filtering;
  accountAssetQueryScope?: ToolsAppManagementHarmonyAppListV2AccountAssetQueryScope;
}

export class ToolsAppManagementHarmonyAppListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementHarmonyAppListGet(request: OpenApi2ToolsAppManagementHarmonyAppListGetRequest): Promise<ToolsAppManagementHarmonyAppListV2Response> {
    const response = await this.openApi2ToolsAppManagementHarmonyAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementHarmonyAppListGetWithHttpInfo(request: OpenApi2ToolsAppManagementHarmonyAppListGetRequest): Promise<ApiResponse<ToolsAppManagementHarmonyAppListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2ToolsAppManagementHarmonyAppListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2ToolsAppManagementHarmonyAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementHarmonyAppListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/harmony_app_list/",
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


