// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppGameBookListV30AccountType, ToolsEbpAppGameBookListV30AssetManagementScope, ToolsEbpAppGameBookListV30AssetOwnership, ToolsEbpAppGameBookListV30Filtering, ToolsEbpAppGameBookListV30Response } from "../models";


export class ToolsEbpAppGameBookListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppGameBookListGet(accountId: number, accountType: ToolsEbpAppGameBookListV30AccountType, assetOwnership: ToolsEbpAppGameBookListV30AssetOwnership, assetManagementScope: ToolsEbpAppGameBookListV30AssetManagementScope, searchKey: string, filtering: ToolsEbpAppGameBookListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpAppGameBookListV30Response> {
    const response = await this.openApiV30ToolsEbpAppGameBookListGetWithHttpInfo(accountId, accountType, assetOwnership, assetManagementScope, searchKey, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpAppGameBookListGetWithHttpInfo(accountId: number, accountType: ToolsEbpAppGameBookListV30AccountType, assetOwnership: ToolsEbpAppGameBookListV30AssetOwnership, assetManagementScope: ToolsEbpAppGameBookListV30AssetManagementScope, searchKey: string, filtering: ToolsEbpAppGameBookListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpAppGameBookListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppGameBookListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAppGameBookListGet");
    }

    if (assetOwnership == null) {
      throw new ApiException("Missing the required parameter 'assetOwnership' when calling openApiV30ToolsEbpAppGameBookListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppGameBookListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app_game_book/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "asset_management_scope", value: assetManagementScope },
        { name: "account_type", value: accountType },
        { name: "search_key", value: searchKey },
        { name: "asset_ownership", value: assetOwnership },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


