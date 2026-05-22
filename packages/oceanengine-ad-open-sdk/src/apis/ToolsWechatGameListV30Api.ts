// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsWechatGameListV30AccountAssetQueryScope, ToolsWechatGameListV30AccountType, ToolsWechatGameListV30Filtering, ToolsWechatGameListV30Response } from "../models";


export interface OpenApiV30ToolsWechatGameListGetRequest {
  accountId: number | string;
  accountType: ToolsWechatGameListV30AccountType;
  page?: number;
  pageSize?: number;
  accountAssetQueryScope?: ToolsWechatGameListV30AccountAssetQueryScope;
  filtering?: ToolsWechatGameListV30Filtering;
}

export class ToolsWechatGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatGameListGet(request: OpenApiV30ToolsWechatGameListGetRequest): Promise<ToolsWechatGameListV30Response> {
    const response = await this.openApiV30ToolsWechatGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatGameListGetWithHttpInfo(request: OpenApiV30ToolsWechatGameListGetRequest): Promise<ApiResponse<ToolsWechatGameListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsWechatGameListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsWechatGameListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsWechatGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/wechat_game/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


