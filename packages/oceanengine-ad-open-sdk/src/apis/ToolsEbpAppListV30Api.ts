// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppListV30AccountType, ToolsEbpAppListV30AssetManagementScope, ToolsEbpAppListV30Filtering, ToolsEbpAppListV30Response } from "../models";


export interface OpenApiV30ToolsEbpAppListGetRequest {
  accountId: number;
  accountType: ToolsEbpAppListV30AccountType;
  assetManagementScope?: ToolsEbpAppListV30AssetManagementScope;
  filtering?: ToolsEbpAppListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpAppListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppListGet(request: OpenApiV30ToolsEbpAppListGetRequest): Promise<ToolsEbpAppListV30Response> {
    const response = await this.openApiV30ToolsEbpAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppListGetWithHttpInfo(request: OpenApiV30ToolsEbpAppListGetRequest): Promise<ApiResponse<ToolsEbpAppListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpAppListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpAppListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/app/list/",
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


