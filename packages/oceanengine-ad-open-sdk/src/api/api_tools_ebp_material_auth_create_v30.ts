// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_material_auth_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMaterialAuthCreateV30Request, ToolsEbpMaterialAuthCreateV30Response } from "../models/index";


export interface ToolsEbpMaterialAuthCreateV30ApiOpenApiV30ToolsEbpMaterialAuthCreatePostRequest {
  toolsEbpMaterialAuthCreateV30Request?: ToolsEbpMaterialAuthCreateV30Request;
}

export class ToolsEbpMaterialAuthCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthCreatePost(request: ToolsEbpMaterialAuthCreateV30ApiOpenApiV30ToolsEbpMaterialAuthCreatePostRequest): Promise<ToolsEbpMaterialAuthCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthCreatePostWithHttpInfo(request: ToolsEbpMaterialAuthCreateV30ApiOpenApiV30ToolsEbpMaterialAuthCreatePostRequest): Promise<ApiResponse<ToolsEbpMaterialAuthCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/material/auth/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMaterialAuthCreateV30Request
    });
  }
}


