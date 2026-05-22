// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroGameListV30AccountType, ToolsEbpMicroGameListV30AssetManagementScope, ToolsEbpMicroGameListV30Filtering, ToolsEbpMicroGameListV30Response } from "../models";


export class ToolsEbpMicroGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameListGet(accountId: number, accountType: ToolsEbpMicroGameListV30AccountType, assetManagementScope: ToolsEbpMicroGameListV30AssetManagementScope, filtering: ToolsEbpMicroGameListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpMicroGameListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameListGetWithHttpInfo(accountId, accountType, assetManagementScope, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameListGetWithHttpInfo(accountId: number, accountType: ToolsEbpMicroGameListV30AccountType, assetManagementScope: ToolsEbpMicroGameListV30AssetManagementScope, filtering: ToolsEbpMicroGameListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpMicroGameListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroGameListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroGameListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_game/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "asset_management_scope", value: assetManagementScope },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


