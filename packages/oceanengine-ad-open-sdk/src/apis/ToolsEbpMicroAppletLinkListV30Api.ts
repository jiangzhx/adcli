// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroAppletLinkListV30AccountType, ToolsEbpMicroAppletLinkListV30CreateTime, ToolsEbpMicroAppletLinkListV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroAppletLinkListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpMicroAppletLinkListV30AccountType;
  instanceId?: number | string;
  appId?: string;
  createTime?: ToolsEbpMicroAppletLinkListV30CreateTime;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMicroAppletLinkListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletLinkListGet(request: OpenApiV30ToolsEbpMicroAppletLinkListGetRequest): Promise<ToolsEbpMicroAppletLinkListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletLinkListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletLinkListGetWithHttpInfo(request: OpenApiV30ToolsEbpMicroAppletLinkListGetRequest): Promise<ApiResponse<ToolsEbpMicroAppletLinkListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroAppletLinkListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroAppletLinkListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletLinkListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_applet/link/list/",
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


