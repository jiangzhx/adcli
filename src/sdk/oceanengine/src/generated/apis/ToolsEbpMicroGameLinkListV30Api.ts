// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpMicroGameLinkListV30AccountType, ToolsEbpMicroGameLinkListV30CreateTime, ToolsEbpMicroGameLinkListV30Response } from "../models";


export class ToolsEbpMicroGameLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameLinkListGet(accountId: number, accountType: ToolsEbpMicroGameLinkListV30AccountType, instanceId: number, appId: string, createTime: ToolsEbpMicroGameLinkListV30CreateTime, page: number, pageSize: number): Promise<ToolsEbpMicroGameLinkListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameLinkListGetWithHttpInfo(accountId, accountType, instanceId, appId, createTime, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameLinkListGetWithHttpInfo(accountId: number, accountType: ToolsEbpMicroGameLinkListV30AccountType, instanceId: number, appId: string, createTime: ToolsEbpMicroGameLinkListV30CreateTime, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpMicroGameLinkListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroGameLinkListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroGameLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_game/link/list/",
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


