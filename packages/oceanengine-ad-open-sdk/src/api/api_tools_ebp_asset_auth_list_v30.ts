// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_asset_auth_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAssetAuthListV30AccountType, ToolsEbpAssetAuthListV30AssetScopeType, ToolsEbpAssetAuthListV30AssetType, ToolsEbpAssetAuthListV30Response } from "../models/index";


export interface ToolsEbpAssetAuthListV30ApiOpenApiV30ToolsEbpAssetAuthListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpAssetAuthListV30AccountType;
  assetType: ToolsEbpAssetAuthListV30AssetType;
  assetScope?: number;
  assetScopeType?: ToolsEbpAssetAuthListV30AssetScopeType;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpAssetAuthListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAssetAuthListGet(request: ToolsEbpAssetAuthListV30ApiOpenApiV30ToolsEbpAssetAuthListGetRequest): Promise<ToolsEbpAssetAuthListV30Response> {
    const response = await this.openApiV30ToolsEbpAssetAuthListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAssetAuthListGetWithHttpInfo(request: ToolsEbpAssetAuthListV30ApiOpenApiV30ToolsEbpAssetAuthListGetRequest): Promise<ApiResponse<ToolsEbpAssetAuthListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAssetAuthListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAssetAuthListGet");
    }

    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsEbpAssetAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAssetAuthListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/asset/auth/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "asset_type", value: request.assetType },
        { name: "asset_scope", value: request.assetScope },
        { name: "asset_scope_type", value: request.assetScopeType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


