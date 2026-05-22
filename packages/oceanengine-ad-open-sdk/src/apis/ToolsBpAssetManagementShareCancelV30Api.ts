// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBpAssetManagementShareCancelV30Request, ToolsBpAssetManagementShareCancelV30Response } from "../models";


export interface OpenApiV30ToolsBpAssetManagementShareCancelPostRequest {
  toolsBpAssetManagementShareCancelV30Request?: ToolsBpAssetManagementShareCancelV30Request;
}

export class ToolsBpAssetManagementShareCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBpAssetManagementShareCancelPost(request: OpenApiV30ToolsBpAssetManagementShareCancelPostRequest): Promise<ToolsBpAssetManagementShareCancelV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementShareCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementShareCancelPostWithHttpInfo(request: OpenApiV30ToolsBpAssetManagementShareCancelPostRequest): Promise<ApiResponse<ToolsBpAssetManagementShareCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/bp_asset_management/share/cancel/",
      queryParams: [

      ],
      body: request.toolsBpAssetManagementShareCancelV30Request
    });
  }
}


