// Generated from oceanengine/ad_open_sdk_go api/api_tools_hot_material_derive_submit_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsHotMaterialDeriveSubmitV30Request, ToolsHotMaterialDeriveSubmitV30Response } from "../models/index";


export interface ToolsHotMaterialDeriveSubmitV30ApiOpenApiV30ToolsHotMaterialDeriveSubmitPostRequest {
  toolsHotMaterialDeriveSubmitV30Request?: ToolsHotMaterialDeriveSubmitV30Request;
}

export class ToolsHotMaterialDeriveSubmitV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveSubmitPost(request: ToolsHotMaterialDeriveSubmitV30ApiOpenApiV30ToolsHotMaterialDeriveSubmitPostRequest): Promise<ToolsHotMaterialDeriveSubmitV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveSubmitPostWithHttpInfo(request: ToolsHotMaterialDeriveSubmitV30ApiOpenApiV30ToolsHotMaterialDeriveSubmitPostRequest): Promise<ApiResponse<ToolsHotMaterialDeriveSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/hot_material_derive/submit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsHotMaterialDeriveSubmitV30Request
    });
  }
}


