// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpAppListV30AccountType, ToolsEbpAppListV30AssetManagementScope, ToolsEbpAppListV30Filtering, ToolsEbpAppListV30Response } from "../models";


export class ToolsEbpAppListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppListGet(accountId: number, accountType: ToolsEbpAppListV30AccountType, assetManagementScope: ToolsEbpAppListV30AssetManagementScope, filtering: ToolsEbpAppListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpAppListV30Response> {
    const response = await this.openApiV30ToolsEbpAppListGetWithHttpInfo(accountId, accountType, assetManagementScope, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpAppListGetWithHttpInfo(accountId: number, accountType: ToolsEbpAppListV30AccountType, assetManagementScope: ToolsEbpAppListV30AssetManagementScope, filtering: ToolsEbpAppListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpAppListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app/list/",
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


