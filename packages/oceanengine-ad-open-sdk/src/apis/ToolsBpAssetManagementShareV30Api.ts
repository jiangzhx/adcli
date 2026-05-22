// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsBpAssetManagementShareV30Request, ToolsBpAssetManagementShareV30Response } from "../models";


export interface OpenApiV30ToolsBpAssetManagementSharePostRequest {
  toolsBpAssetManagementShareV30Request?: ToolsBpAssetManagementShareV30Request;
}

export class ToolsBpAssetManagementShareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsBpAssetManagementSharePost(request: OpenApiV30ToolsBpAssetManagementSharePostRequest): Promise<ToolsBpAssetManagementShareV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementSharePostWithHttpInfo(request: OpenApiV30ToolsBpAssetManagementSharePostRequest): Promise<ApiResponse<ToolsBpAssetManagementShareV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/bp_asset_management/share/",
      queryParams: [

      ],
      body: request.toolsBpAssetManagementShareV30Request
    });
  }
}


