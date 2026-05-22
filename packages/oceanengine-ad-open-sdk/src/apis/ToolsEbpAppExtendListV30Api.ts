// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppExtendListV30AccountType, ToolsEbpAppExtendListV30Filtering, ToolsEbpAppExtendListV30Response, ToolsEbpAppExtendListV30UpdateTime } from "../models";


export interface OpenApiV30ToolsEbpAppExtendListGetRequest {
  accountId: number;
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

  async openApiV30ToolsEbpAppExtendListGet(request: OpenApiV30ToolsEbpAppExtendListGetRequest): Promise<ToolsEbpAppExtendListV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendListGetWithHttpInfo(request: OpenApiV30ToolsEbpAppExtendListGetRequest): Promise<ApiResponse<ToolsEbpAppExtendListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppExtendListGet");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApiV30ToolsEbpAppExtendListGet");
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


