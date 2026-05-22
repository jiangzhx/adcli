// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppDetailV30AccountType, ToolsEbpAppDetailV30Response } from "../models";


export interface OpenApiV30ToolsEbpAppDetailGetRequest {
  accountId: number;
  accountType: ToolsEbpAppDetailV30AccountType;
  packageId: string;
}

export class ToolsEbpAppDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppDetailGet(request: OpenApiV30ToolsEbpAppDetailGetRequest): Promise<ToolsEbpAppDetailV30Response> {
    const response = await this.openApiV30ToolsEbpAppDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppDetailGetWithHttpInfo(request: OpenApiV30ToolsEbpAppDetailGetRequest): Promise<ApiResponse<ToolsEbpAppDetailV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppDetailGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAppDetailGet");
    }

    if (request.packageId == null) {
      throw new ApiException("Missing the required parameter 'packageId' when calling openApiV30ToolsEbpAppDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app/detail/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "package_id", value: request.packageId }
      ]
    });
  }
}


