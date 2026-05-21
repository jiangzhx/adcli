// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpWechatAppletListV30AccountType, ToolsEbpWechatAppletListV30AssetManagementScope, ToolsEbpWechatAppletListV30Filtering, ToolsEbpWechatAppletListV30Response } from "../models";


export class ToolsEbpWechatAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletListGet(accountId: number, accountType: ToolsEbpWechatAppletListV30AccountType, assetManagementScope: ToolsEbpWechatAppletListV30AssetManagementScope, filtering: ToolsEbpWechatAppletListV30Filtering, page: number, pageSize: number): Promise<ToolsEbpWechatAppletListV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletListGetWithHttpInfo(accountId, accountType, assetManagementScope, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletListGetWithHttpInfo(accountId: number, accountType: ToolsEbpWechatAppletListV30AccountType, assetManagementScope: ToolsEbpWechatAppletListV30AssetManagementScope, filtering: ToolsEbpWechatAppletListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpWechatAppletListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpWechatAppletListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpWechatAppletListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/list/",
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


