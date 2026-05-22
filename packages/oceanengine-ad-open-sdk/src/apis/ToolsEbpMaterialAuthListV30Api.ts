// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMaterialAuthListV30AccountType, ToolsEbpMaterialAuthListV30MaterialType, ToolsEbpMaterialAuthListV30Response } from "../models";


export interface OpenApiV30ToolsEbpMaterialAuthListGetRequest {
  accountId: number;
  accountType?: ToolsEbpMaterialAuthListV30AccountType;
  materialType?: ToolsEbpMaterialAuthListV30MaterialType;
  page?: number;
  pageSize?: number;
}

export class ToolsEbpMaterialAuthListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthListGet(request: OpenApiV30ToolsEbpMaterialAuthListGetRequest): Promise<ToolsEbpMaterialAuthListV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthListGetWithHttpInfo(request: OpenApiV30ToolsEbpMaterialAuthListGetRequest): Promise<ApiResponse<ToolsEbpMaterialAuthListV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMaterialAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/material/auth/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "material_type", value: request.materialType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


