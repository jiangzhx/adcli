// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_harmony_app_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementHarmonyAppListV2AccountAssetQueryScope, ToolsAppManagementHarmonyAppListV2AccountType, ToolsAppManagementHarmonyAppListV2Filtering, ToolsAppManagementHarmonyAppListV2Response } from "../models/index";


export interface ToolsAppManagementHarmonyAppListV2ApiOpenApi2ToolsAppManagementHarmonyAppListGetRequest {
  accountId: number | string;
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

  async openApi2ToolsAppManagementHarmonyAppListGet(request: ToolsAppManagementHarmonyAppListV2ApiOpenApi2ToolsAppManagementHarmonyAppListGetRequest): Promise<ToolsAppManagementHarmonyAppListV2Response> {
    const response = await this.openApi2ToolsAppManagementHarmonyAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementHarmonyAppListGetWithHttpInfo(request: ToolsAppManagementHarmonyAppListV2ApiOpenApi2ToolsAppManagementHarmonyAppListGetRequest): Promise<ApiResponse<ToolsAppManagementHarmonyAppListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
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


