// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_wechat_applet_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpWechatAppletListV30AccountType, ToolsEbpWechatAppletListV30AssetManagementScope, ToolsEbpWechatAppletListV30Filtering, ToolsEbpWechatAppletListV30Response } from "../models/index";


export interface ToolsEbpWechatAppletListV30ApiOpenApiV30ToolsEbpWechatAppletListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpWechatAppletListV30AccountType;
  assetManagementScope?: ToolsEbpWechatAppletListV30AssetManagementScope;
  filtering?: ToolsEbpWechatAppletListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpWechatAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpWechatAppletListGet(request: ToolsEbpWechatAppletListV30ApiOpenApiV30ToolsEbpWechatAppletListGetRequest): Promise<ToolsEbpWechatAppletListV30Response> {
    const response = await this.openApiV30ToolsEbpWechatAppletListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpWechatAppletListGetWithHttpInfo(request: ToolsEbpWechatAppletListV30ApiOpenApiV30ToolsEbpWechatAppletListGetRequest): Promise<ApiResponse<ToolsEbpWechatAppletListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpWechatAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/wechat_applet/list/",
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


