// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsWechatAppletListV30AccountAssetQueryScope, ToolsWechatAppletListV30Filtering, ToolsWechatAppletListV30OrderField, ToolsWechatAppletListV30OrderType, ToolsWechatAppletListV30Response } from "../models";


export class ToolsWechatAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletListGet(advertiserId: number, filtering: ToolsWechatAppletListV30Filtering, page: number, pageSize: number, orderType: ToolsWechatAppletListV30OrderType, orderField: ToolsWechatAppletListV30OrderField, accountAssetQueryScope: ToolsWechatAppletListV30AccountAssetQueryScope): Promise<ToolsWechatAppletListV30Response> {
    const response = await this.openApiV30ToolsWechatAppletListGetWithHttpInfo(advertiserId, filtering, page, pageSize, orderType, orderField, accountAssetQueryScope);
    return response.data;
  }

  async openApiV30ToolsWechatAppletListGetWithHttpInfo(advertiserId: number, filtering: ToolsWechatAppletListV30Filtering, page: number, pageSize: number, orderType: ToolsWechatAppletListV30OrderType, orderField: ToolsWechatAppletListV30OrderField, accountAssetQueryScope: ToolsWechatAppletListV30AccountAssetQueryScope): Promise<ApiResponse<ToolsWechatAppletListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsWechatAppletListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/wechat_applet/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "account_asset_query_scope", value: accountAssetQueryScope }
      ]
    });
  }
}


