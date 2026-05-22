// Generated from oceanengine/ad_open_sdk_go api/api_tools_hot_material_derive_adopt_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsHotMaterialDeriveAdoptV30Request, ToolsHotMaterialDeriveAdoptV30Response } from "../models/index";


export interface ToolsHotMaterialDeriveAdoptV30ApiOpenApiV30ToolsHotMaterialDeriveAdoptPostRequest {
  toolsHotMaterialDeriveAdoptV30Request?: ToolsHotMaterialDeriveAdoptV30Request;
}

export class ToolsHotMaterialDeriveAdoptV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveAdoptPost(request: ToolsHotMaterialDeriveAdoptV30ApiOpenApiV30ToolsHotMaterialDeriveAdoptPostRequest): Promise<ToolsHotMaterialDeriveAdoptV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveAdoptPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveAdoptPostWithHttpInfo(request: ToolsHotMaterialDeriveAdoptV30ApiOpenApiV30ToolsHotMaterialDeriveAdoptPostRequest): Promise<ApiResponse<ToolsHotMaterialDeriveAdoptV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveAdoptV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/hot_material_derive/adopt/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsHotMaterialDeriveAdoptV30Request
    });
  }
}


