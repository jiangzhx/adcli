// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMaterialAuthListV30AccountType, ToolsEbpMaterialAuthListV30MaterialType, ToolsEbpMaterialAuthListV30Response } from "../models";


export class ToolsEbpMaterialAuthListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthListGet(accountId: number, accountType: ToolsEbpMaterialAuthListV30AccountType, materialType: ToolsEbpMaterialAuthListV30MaterialType, page: number, pageSize: number): Promise<ToolsEbpMaterialAuthListV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthListGetWithHttpInfo(accountId, accountType, materialType, page, pageSize);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthListGetWithHttpInfo(accountId: number, accountType: ToolsEbpMaterialAuthListV30AccountType, materialType: ToolsEbpMaterialAuthListV30MaterialType, page: number, pageSize: number): Promise<ApiResponse<ToolsEbpMaterialAuthListV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsEbpMaterialAuthListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/material/auth/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "material_type", value: materialType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


