// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsHotMaterialDeriveSubmitV30Request, ToolsHotMaterialDeriveSubmitV30Response } from "../models";


export interface OpenApiV30ToolsHotMaterialDeriveSubmitPostRequest {
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

  async openApiV30ToolsHotMaterialDeriveSubmitPost(request: OpenApiV30ToolsHotMaterialDeriveSubmitPostRequest): Promise<ToolsHotMaterialDeriveSubmitV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveSubmitPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveSubmitPostWithHttpInfo(request: OpenApiV30ToolsHotMaterialDeriveSubmitPostRequest): Promise<ApiResponse<ToolsHotMaterialDeriveSubmitV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveSubmitV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/hot_material_derive/submit/",
      queryParams: [

      ],
      body: request.toolsHotMaterialDeriveSubmitV30Request
    });
  }
}


