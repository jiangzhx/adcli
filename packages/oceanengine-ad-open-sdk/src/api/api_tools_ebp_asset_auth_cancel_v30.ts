// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_asset_auth_cancel_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAssetAuthCancelV30Request, ToolsEbpAssetAuthCancelV30Response } from "../models/index";


export interface ToolsEbpAssetAuthCancelV30ApiOpenApiV30ToolsEbpAssetAuthCancelPostRequest {
  toolsEbpAssetAuthCancelV30Request?: ToolsEbpAssetAuthCancelV30Request;
}

export class ToolsEbpAssetAuthCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAssetAuthCancelPost(request: ToolsEbpAssetAuthCancelV30ApiOpenApiV30ToolsEbpAssetAuthCancelPostRequest): Promise<ToolsEbpAssetAuthCancelV30Response> {
    const response = await this.openApiV30ToolsEbpAssetAuthCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAssetAuthCancelPostWithHttpInfo(request: ToolsEbpAssetAuthCancelV30ApiOpenApiV30ToolsEbpAssetAuthCancelPostRequest): Promise<ApiResponse<ToolsEbpAssetAuthCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAssetAuthCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/asset/auth/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAssetAuthCancelV30Request
    });
  }
}


