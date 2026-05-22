// Generated from oceanengine/ad_open_sdk_go api/api_tools_bp_asset_management_share_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsBpAssetManagementShareV30Request, ToolsBpAssetManagementShareV30Response } from "../models/index";


export interface ToolsBpAssetManagementShareV30ApiOpenApiV30ToolsBpAssetManagementSharePostRequest {
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

  async openApiV30ToolsBpAssetManagementSharePost(request: ToolsBpAssetManagementShareV30ApiOpenApiV30ToolsBpAssetManagementSharePostRequest): Promise<ToolsBpAssetManagementShareV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementSharePostWithHttpInfo(request: ToolsBpAssetManagementShareV30ApiOpenApiV30ToolsBpAssetManagementSharePostRequest): Promise<ApiResponse<ToolsBpAssetManagementShareV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/bp_asset_management/share/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsBpAssetManagementShareV30Request
    });
  }
}


