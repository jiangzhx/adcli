// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpMicroAppletLinkListV30AccountType, ToolsEbpMicroAppletLinkListV30CreateTime, ToolsEbpMicroAppletLinkListV30Response } from "../models";


export class ToolsEbpMicroAppletLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletLinkListGet(accountId: number, accountType: ToolsEbpMicroAppletLinkListV30AccountType, instanceId: number, appId: string, createTime: ToolsEbpMicroAppletLinkListV30CreateTime, page: number, pageSize: number): Promise<ToolsEbpMicroAppletLinkListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletLinkListGetWithHttpInfo(accountId, accountType, instanceId, appId, createTime, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletLinkListGetWithHttpInfo(accountId: number, accountType: ToolsEbpMicroAppletLinkListV30AccountType, instanceId: number, appId: string, createTime: ToolsEbpMicroAppletLinkListV30CreateTime, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpMicroAppletLinkListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroAppletLinkListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroAppletLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_applet/link/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "instance_id", value: instanceId },
        { name: "app_id", value: appId },
        { name: "create_time", value: createTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


