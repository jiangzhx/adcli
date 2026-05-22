// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_extend_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppExtendListV30AccountType, ToolsEbpAppExtendListV30Filtering, ToolsEbpAppExtendListV30Response, ToolsEbpAppExtendListV30UpdateTime } from "../models/index";


export interface ToolsEbpAppExtendListV30ApiOpenApiV30ToolsEbpAppExtendListGetRequest {
  accountId: number | string;
  packageId: string;
  accountType?: ToolsEbpAppExtendListV30AccountType;
  filtering?: ToolsEbpAppExtendListV30Filtering;
  updateTime?: ToolsEbpAppExtendListV30UpdateTime;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpAppExtendListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendListGet(request: ToolsEbpAppExtendListV30ApiOpenApiV30ToolsEbpAppExtendListGetRequest): Promise<ToolsEbpAppExtendListV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendListGetWithHttpInfo(request: ToolsEbpAppExtendListV30ApiOpenApiV30ToolsEbpAppExtendListGetRequest): Promise<ApiResponse<ToolsEbpAppExtendListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.packageId == null) {
      throw new ApiException("packageId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app_extend/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "package_id", value: request.packageId },
        { name: "filtering", value: request.filtering },
        { name: "update_time", value: request.updateTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


