// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroGameListV30AccountType, ToolsEbpMicroGameListV30AssetManagementScope, ToolsEbpMicroGameListV30Filtering, ToolsEbpMicroGameListV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroGameListGetRequest {
  accountId: number;
  accountType: ToolsEbpMicroGameListV30AccountType;
  assetManagementScope?: ToolsEbpMicroGameListV30AssetManagementScope;
  filtering?: ToolsEbpMicroGameListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMicroGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameListGet(request: OpenApiV30ToolsEbpMicroGameListGetRequest): Promise<ToolsEbpMicroGameListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameListGetWithHttpInfo(request: OpenApiV30ToolsEbpMicroGameListGetRequest): Promise<ApiResponse<ToolsEbpMicroGameListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroGameListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroGameListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_game/list/",
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


