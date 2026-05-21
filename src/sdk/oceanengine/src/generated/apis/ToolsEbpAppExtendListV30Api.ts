// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpAppExtendListV30AccountType, ToolsEbpAppExtendListV30Filtering, ToolsEbpAppExtendListV30Response, ToolsEbpAppExtendListV30UpdateTime } from "../models";


export class ToolsEbpAppExtendListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendListGet(accountId: number, packageId: string, accountType: ToolsEbpAppExtendListV30AccountType, filtering: ToolsEbpAppExtendListV30Filtering, updateTime: ToolsEbpAppExtendListV30UpdateTime, page: number, pageSize: number): Promise<ToolsEbpAppExtendListV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendListGetWithHttpInfo(accountId, packageId, accountType, filtering, updateTime, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendListGetWithHttpInfo(accountId: number, packageId: string, accountType: ToolsEbpAppExtendListV30AccountType, filtering: ToolsEbpAppExtendListV30Filtering, updateTime: ToolsEbpAppExtendListV30UpdateTime, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpAppExtendListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppExtendListGet");
    }

    if (packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApiV30ToolsEbpAppExtendListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app_extend/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "package_id", value: packageId },
        { name: "filtering", value: filtering },
        { name: "update_time", value: updateTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


