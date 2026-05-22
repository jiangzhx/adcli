// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpWechatGameListV30AccountType, ToolsEbpWechatGameListV30AssetManagementScope, ToolsEbpWechatGameListV30Filtering, ToolsEbpWechatGameListV30Response } from "../models";


export interface OpenApiV30ToolsEbpWechatGameListGetRequest {
  accountId: number;
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

  async openApiV30ToolsEbpWechatGameListGet(request: OpenApiV30ToolsEbpWechatGameListGetRequest): Promise<ToolsEbpWechatGameListV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameListGetWithHttpInfo(request: OpenApiV30ToolsEbpWechatGameListGetRequest): Promise<ApiResponse<ToolsEbpWechatGameListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpWechatGameListGet");
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


