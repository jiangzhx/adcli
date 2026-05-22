// Generated from oceanengine/ad_open_sdk_go api/api_tools_bp_asset_management_share_cancel_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsBpAssetManagementShareCancelV30Request, ToolsBpAssetManagementShareCancelV30Response } from "../models/index";


export interface ToolsBpAssetManagementShareCancelV30ApiOpenApiV30ToolsBpAssetManagementShareCancelPostRequest {
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

  async openApiV30ToolsBpAssetManagementShareCancelPost(request: ToolsBpAssetManagementShareCancelV30ApiOpenApiV30ToolsBpAssetManagementShareCancelPostRequest): Promise<ToolsBpAssetManagementShareCancelV30Response> {
    const response = await this.openApiV30ToolsBpAssetManagementShareCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsBpAssetManagementShareCancelPostWithHttpInfo(request: ToolsBpAssetManagementShareCancelV30ApiOpenApiV30ToolsBpAssetManagementShareCancelPostRequest): Promise<ApiResponse<ToolsBpAssetManagementShareCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsBpAssetManagementShareCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/bp_asset_management/share/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsBpAssetManagementShareCancelV30Request
    });
  }
}


