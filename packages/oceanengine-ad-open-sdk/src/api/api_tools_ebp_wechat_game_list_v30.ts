// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_game_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatGameListV30AccountType, ToolsEbpWechatGameListV30AssetManagementScope, ToolsEbpWechatGameListV30Filtering, ToolsEbpWechatGameListV30Response } from "../models/index";


export interface ToolsEbpWechatGameListV30ApiOpenApiV30ToolsEbpWechatGameListGetRequest {
  accountId: number | string;
  accountType?: ToolsEbpWechatGameListV30AccountType;
  assetManagementScope?: ToolsEbpWechatGameListV30AssetManagementScope;
  filtering?: ToolsEbpWechatGameListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpWechatGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatGameListGet(request: ToolsEbpWechatGameListV30ApiOpenApiV30ToolsEbpWechatGameListGetRequest): Promise<ToolsEbpWechatGameListV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameListGetWithHttpInfo(request: ToolsEbpWechatGameListV30ApiOpenApiV30ToolsEbpWechatGameListGetRequest): Promise<ApiResponse<ToolsEbpWechatGameListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/wechat_game/list/",
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


