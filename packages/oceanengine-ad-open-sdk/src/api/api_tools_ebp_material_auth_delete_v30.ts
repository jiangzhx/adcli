// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_material_auth_delete_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMaterialAuthDeleteV30Request, ToolsEbpMaterialAuthDeleteV30Response } from "../models/index";


export interface ToolsEbpMaterialAuthDeleteV30ApiOpenApiV30ToolsEbpMaterialAuthDeletePostRequest {
  toolsEbpMaterialAuthDeleteV30Request?: ToolsEbpMaterialAuthDeleteV30Request;
}

export class ToolsEbpMaterialAuthDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthDeletePost(request: ToolsEbpMaterialAuthDeleteV30ApiOpenApiV30ToolsEbpMaterialAuthDeletePostRequest): Promise<ToolsEbpMaterialAuthDeleteV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthDeletePostWithHttpInfo(request: ToolsEbpMaterialAuthDeleteV30ApiOpenApiV30ToolsEbpMaterialAuthDeletePostRequest): Promise<ApiResponse<ToolsEbpMaterialAuthDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/material/auth/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMaterialAuthDeleteV30Request
    });
  }
}


