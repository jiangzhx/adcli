// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_applet_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroAppletListV30AccountType, ToolsEbpMicroAppletListV30AssetManagementScope, ToolsEbpMicroAppletListV30Filtering, ToolsEbpMicroAppletListV30Response } from "../models/index";


export interface ToolsEbpMicroAppletListV30ApiOpenApiV30ToolsEbpMicroAppletListGetRequest {
  accountId: number | string;
  accountType: ToolsEbpMicroAppletListV30AccountType;
  assetManagementScope: ToolsEbpMicroAppletListV30AssetManagementScope;
  filtering?: ToolsEbpMicroAppletListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMicroAppletListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroAppletListGet(request: ToolsEbpMicroAppletListV30ApiOpenApiV30ToolsEbpMicroAppletListGetRequest): Promise<ToolsEbpMicroAppletListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(request: ToolsEbpMicroAppletListV30ApiOpenApiV30ToolsEbpMicroAppletListGetRequest): Promise<ApiResponse<ToolsEbpMicroAppletListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.assetManagementScope == null) {
      throw new ApiException("assetManagementScope is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroAppletListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/micro_applet/list/",
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


