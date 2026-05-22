// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_game_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroGameListV30AccountType, ToolsEbpMicroGameListV30AssetManagementScope, ToolsEbpMicroGameListV30Filtering, ToolsEbpMicroGameListV30Response } from "../models/index";


export interface ToolsEbpMicroGameListV30ApiOpenApiV30ToolsEbpMicroGameListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpMicroGameListV30AccountType;
  assetManagementScope?: ToolsEbpMicroGameListV30AssetManagementScope;
  filtering?: ToolsEbpMicroGameListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMicroGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameListGet(request: ToolsEbpMicroGameListV30ApiOpenApiV30ToolsEbpMicroGameListGetRequest): Promise<ToolsEbpMicroGameListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameListGetWithHttpInfo(request: ToolsEbpMicroGameListV30ApiOpenApiV30ToolsEbpMicroGameListGetRequest): Promise<ApiResponse<ToolsEbpMicroGameListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_game/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "asset_management_scope", value: request.assetManagementScope },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


