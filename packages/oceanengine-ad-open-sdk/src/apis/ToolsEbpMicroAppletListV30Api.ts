// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroAppletListV30AccountType, ToolsEbpMicroAppletListV30AssetManagementScope, ToolsEbpMicroAppletListV30Filtering, ToolsEbpMicroAppletListV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroAppletListGetRequest {
  accountId: number;
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

  async openApiV30ToolsEbpMicroAppletListGet(request: OpenApiV30ToolsEbpMicroAppletListGetRequest): Promise<ToolsEbpMicroAppletListV30Response> {
    const response = await this.openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroAppletListGetWithHttpInfo(request: OpenApiV30ToolsEbpMicroAppletListGetRequest): Promise<ApiResponse<ToolsEbpMicroAppletListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMicroAppletListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsEbpMicroAppletListGet");
    }

    if (request.assetManagementScope == null) {
      throw new ApiException("Missing the required parameter 'assetManagementScope' when calling openApiV30ToolsEbpMicroAppletListGet");
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


