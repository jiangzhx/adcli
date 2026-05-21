// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsWechatGameListV30AccountAssetQueryScope, ToolsWechatGameListV30AccountType, ToolsWechatGameListV30Filtering, ToolsWechatGameListV30Response } from "../models";


export class ToolsWechatGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatGameListGet(accountId: number, accountType: ToolsWechatGameListV30AccountType, page: number, pageSize: number, accountAssetQueryScope: ToolsWechatGameListV30AccountAssetQueryScope, filtering: ToolsWechatGameListV30Filtering): Promise<ToolsWechatGameListV30Response> {
    const response = await this.openApiV30ToolsWechatGameListGetWithHttpInfo(accountId, accountType, page, pageSize, accountAssetQueryScope, filtering);
    return response.data;
  }

  async openApiV30ToolsWechatGameListGetWithHttpInfo(accountId: number, accountType: ToolsWechatGameListV30AccountType, page: number, pageSize: number, accountAssetQueryScope: ToolsWechatGameListV30AccountAssetQueryScope, filtering: ToolsWechatGameListV30Filtering): Promise<ApiResponse<ToolsWechatGameListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsWechatGameListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsWechatGameListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsWechatGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/wechat_game/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "account_asset_query_scope", value: accountAssetQueryScope },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


