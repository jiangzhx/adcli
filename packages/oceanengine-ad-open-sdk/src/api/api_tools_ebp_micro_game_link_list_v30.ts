// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_game_link_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroGameLinkListV30AccountType, ToolsEbpMicroGameLinkListV30CreateTime, ToolsEbpMicroGameLinkListV30Response } from "../models/index";


export interface ToolsEbpMicroGameLinkListV30ApiOpenApiV30ToolsEbpMicroGameLinkListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpMicroGameLinkListV30AccountType;
  instanceId?: number | string;
  appId?: string;
  createTime?: ToolsEbpMicroGameLinkListV30CreateTime;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMicroGameLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameLinkListGet(request: ToolsEbpMicroGameLinkListV30ApiOpenApiV30ToolsEbpMicroGameLinkListGetRequest): Promise<ToolsEbpMicroGameLinkListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameLinkListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameLinkListGetWithHttpInfo(request: ToolsEbpMicroGameLinkListV30ApiOpenApiV30ToolsEbpMicroGameLinkListGetRequest): Promise<ApiResponse<ToolsEbpMicroGameLinkListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroGameLinkListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroGameLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_game/link/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "instance_id", value: request.instanceId },
        { name: "app_id", value: request.appId },
        { name: "create_time", value: request.createTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


