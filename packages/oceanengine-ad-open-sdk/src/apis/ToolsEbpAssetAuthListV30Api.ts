// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAssetAuthListV30AccountType, ToolsEbpAssetAuthListV30AssetScopeType, ToolsEbpAssetAuthListV30AssetType, ToolsEbpAssetAuthListV30Response } from "../models";


export class ToolsEbpAssetAuthListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAssetAuthListGet(accountId: number, accountType: ToolsEbpAssetAuthListV30AccountType, assetType: ToolsEbpAssetAuthListV30AssetType, assetScope: number, assetScopeType: ToolsEbpAssetAuthListV30AssetScopeType, page: number, pageSize: number): Promise<ToolsEbpAssetAuthListV30Response> {
    const response = await this.openApiV30ToolsEbpAssetAuthListGetWithHttpInfo(accountId, accountType, assetType, assetScope, assetScopeType, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpAssetAuthListGetWithHttpInfo(accountId: number, accountType: ToolsEbpAssetAuthListV30AccountType, assetType: ToolsEbpAssetAuthListV30AssetType, assetScope: number, assetScopeType: ToolsEbpAssetAuthListV30AssetScopeType, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpAssetAuthListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAssetAuthListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAssetAuthListGet");
    }

    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsEbpAssetAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAssetAuthListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/asset/auth/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "asset_type", value: assetType },
        { name: "asset_scope", value: assetScope },
        { name: "asset_scope_type", value: assetScopeType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


