// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroAppletListV30AccountType, ToolsEbpMicroAppletListV30AssetManagementScope, ToolsEbpMicroAppletListV30Filtering, ToolsEbpMicroAppletListV30Response } from "../models";


export class ToolsEbpMicroAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletListGet(accountId: number, accountType: ToolsEbpMicroAppletListV30AccountType, assetManagementScope: ToolsEbpMicroAppletListV30AssetManagementScope, filtering: ToolsEbpMicroAppletListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpMicroAppletListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(accountId, accountType, assetManagementScope, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(accountId: number, accountType: ToolsEbpMicroAppletListV30AccountType, assetManagementScope: ToolsEbpMicroAppletListV30AssetManagementScope, filtering: ToolsEbpMicroAppletListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpMicroAppletListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroAppletListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroAppletListGet");
    }

    if (assetManagementScope == null) {
      throw new ApiException("Missing the required parameter 'assetManagementScope' when calling openApiV30ToolsEbpMicroAppletListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_applet/list/",
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


