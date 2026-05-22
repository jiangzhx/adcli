// Generated from oceanengine/ad_open_sdk_go api/api_tools_wechat_applet_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsWechatAppletListV30AccountAssetQueryScope, ToolsWechatAppletListV30Filtering, ToolsWechatAppletListV30OrderField, ToolsWechatAppletListV30OrderType, ToolsWechatAppletListV30Response } from "../models/index";


export interface ToolsWechatAppletListV30ApiOpenApiV30ToolsWechatAppletListGetRequest {
  advertiserId: number | string;
  filtering?: ToolsWechatAppletListV30Filtering;
  page?: number;
  pageSize?: number;
  orderType?: ToolsWechatAppletListV30OrderType;
  orderField?: ToolsWechatAppletListV30OrderField;
  accountAssetQueryScope?: ToolsWechatAppletListV30AccountAssetQueryScope;
}

export class ToolsWechatAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsWechatAppletListGet(request: ToolsWechatAppletListV30ApiOpenApiV30ToolsWechatAppletListGetRequest): Promise<ToolsWechatAppletListV30Response> {
    const response = await this.openApiV30ToolsWechatAppletListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsWechatAppletListGetWithHttpInfo(request: ToolsWechatAppletListV30ApiOpenApiV30ToolsWechatAppletListGetRequest): Promise<ApiResponse<ToolsWechatAppletListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsWechatAppletListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsWechatAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/wechat_applet/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


