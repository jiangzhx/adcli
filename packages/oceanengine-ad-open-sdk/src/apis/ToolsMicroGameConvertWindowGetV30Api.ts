// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroGameConvertWindowGetV30AccountType, ToolsMicroGameConvertWindowGetV30AssetType, ToolsMicroGameConvertWindowGetV30Response } from "../models";


export interface OpenApiV30ToolsMicroGameConvertWindowGetGetRequest {
  accountId: number;
  accountType: ToolsMicroGameConvertWindowGetV30AccountType;
  assetId: string;
  assetType: ToolsMicroGameConvertWindowGetV30AssetType;
}

export class ToolsMicroGameConvertWindowGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameConvertWindowGetGet(request: OpenApiV30ToolsMicroGameConvertWindowGetGetRequest): Promise<ToolsMicroGameConvertWindowGetV30Response> {
    const response = await this.openApiV30ToolsMicroGameConvertWindowGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameConvertWindowGetGetWithHttpInfo(request: OpenApiV30ToolsMicroGameConvertWindowGetGetRequest): Promise<ApiResponse<ToolsMicroGameConvertWindowGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (request.assetId == null) {
      throw new ApiException("Missing the required parameter 'assetId' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }

    if (request.assetType == null) {
      throw new ApiException("Missing the required parameter 'assetType' when calling openApiV30ToolsMicroGameConvertWindowGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMicroGameConvertWindowGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/micro_game/convert_window/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "asset_id", value: request.assetId },
        { name: "asset_type", value: request.assetType }
      ]
    });
  }
}


