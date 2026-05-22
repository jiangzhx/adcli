// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_game_book_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppGameBookListV30AccountType, ToolsEbpAppGameBookListV30AssetManagementScope, ToolsEbpAppGameBookListV30AssetOwnership, ToolsEbpAppGameBookListV30Filtering, ToolsEbpAppGameBookListV30Response } from "../models/index";


export interface ToolsEbpAppGameBookListV30ApiOpenApiV30ToolsEbpAppGameBookListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpAppGameBookListV30AccountType;
  assetOwnership: ToolsEbpAppGameBookListV30AssetOwnership;
  assetManagementScope?: ToolsEbpAppGameBookListV30AssetManagementScope;
  searchKey?: string;
  filtering?: ToolsEbpAppGameBookListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpAppGameBookListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppGameBookListGet(request: ToolsEbpAppGameBookListV30ApiOpenApiV30ToolsEbpAppGameBookListGetRequest): Promise<ToolsEbpAppGameBookListV30Response> {
    const response = await this.openApiV30ToolsEbpAppGameBookListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppGameBookListGetWithHttpInfo(request: ToolsEbpAppGameBookListV30ApiOpenApiV30ToolsEbpAppGameBookListGetRequest): Promise<ApiResponse<ToolsEbpAppGameBookListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.assetOwnership == null) {
      throw new ApiException("assetOwnership is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppGameBookListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app_game_book/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "asset_management_scope", value: request.assetManagementScope },
        { name: "account_type", value: request.accountType },
        { name: "search_key", value: request.searchKey },
        { name: "asset_ownership", value: request.assetOwnership },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


