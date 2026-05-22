// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroGameConvertWindowGetV30AccountType, ToolsMicroGameConvertWindowGetV30AssetType, ToolsMicroGameConvertWindowGetV30Response } from "../models";


export class ToolsMicroGameConvertWindowGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameConvertWindowGetGet(accountId: number, accountType: ToolsMicroGameConvertWindowGetV30AccountType, assetId: string, assetType: ToolsMicroGameConvertWindowGetV30AssetType): Promise<ToolsMicroGameConvertWindowGetV30Response> {
    const response = await this.openApiV30ToolsMicroGameConvertWindowGetGetWithHttpInfo(accountId, accountType, assetId, assetType);
    return response.data;
  }

  async openApiV30ToolsMicroGameConvertWindowGetGetWithHttpInfo(accountId: number, accountType: ToolsMicroGameConvertWindowGetV30AccountType, assetId: string, assetType: ToolsMicroGameConvertWindowGetV30AssetType): Promise<ApiResponse<ToolsMicroGameConvertWindowGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMicroGameConvertWindowGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/micro_game/convert_window/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "asset_id", value: assetId },
        { name: "asset_type", value: assetType }
      ]
    });
  }
}


