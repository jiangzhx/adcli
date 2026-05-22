// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppListV30AccountType, ToolsEbpAppListV30AssetManagementScope, ToolsEbpAppListV30Filtering, ToolsEbpAppListV30Response } from "../models/index";


export interface ToolsEbpAppListV30ApiOpenApiV30ToolsEbpAppListGetRequest {
  accountId: number | string;
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

  async openApiV30ToolsEbpAppListGet(request: ToolsEbpAppListV30ApiOpenApiV30ToolsEbpAppListGetRequest): Promise<ToolsEbpAppListV30Response> {
    const response = await this.openApiV30ToolsEbpAppListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppListGetWithHttpInfo(request: ToolsEbpAppListV30ApiOpenApiV30ToolsEbpAppListGetRequest): Promise<ApiResponse<ToolsEbpAppListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
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


