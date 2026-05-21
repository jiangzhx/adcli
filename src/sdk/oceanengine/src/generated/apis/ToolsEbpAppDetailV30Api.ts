// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpAppDetailV30AccountType, ToolsEbpAppDetailV30Response } from "../models";


export class ToolsEbpAppDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppDetailGet(accountId: number, accountType: ToolsEbpAppDetailV30AccountType, packageId: string): Promise<ToolsEbpAppDetailV30Response> {
    const response = await this.openApiV30ToolsEbpAppDetailGetWithHttpInfo(accountId, accountType, packageId);
    return response.data;
  }

  async openApiV30ToolsEbpAppDetailGetWithHttpInfo(accountId: number, accountType: ToolsEbpAppDetailV30AccountType, packageId: string): Promise<ApiResponse<ToolsEbpAppDetailV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppDetailGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAppDetailGet");
    }

    if (packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApiV30ToolsEbpAppDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app/detail/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "package_id", value: packageId }
      ]
    });
  }
}


