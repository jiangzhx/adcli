// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpWechatGameListV30AccountType, ToolsEbpWechatGameListV30AssetManagementScope, ToolsEbpWechatGameListV30Filtering, ToolsEbpWechatGameListV30Response } from "../models";


export class ToolsEbpWechatGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatGameListGet(accountId: number, accountType: ToolsEbpWechatGameListV30AccountType, assetManagementScope: ToolsEbpWechatGameListV30AssetManagementScope, filtering: ToolsEbpWechatGameListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpWechatGameListV30Response> {
    const response = await this.openApiV30ToolsEbpWechatGameListGetWithHttpInfo(accountId, accountType, assetManagementScope, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpWechatGameListGetWithHttpInfo(accountId: number, accountType: ToolsEbpWechatGameListV30AccountType, assetManagementScope: ToolsEbpWechatGameListV30AssetManagementScope, filtering: ToolsEbpWechatGameListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpWechatGameListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpWechatGameListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/wechat_game/list/",
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


