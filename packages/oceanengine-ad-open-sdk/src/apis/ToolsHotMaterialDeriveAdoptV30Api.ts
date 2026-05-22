// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsHotMaterialDeriveAdoptV30Request, ToolsHotMaterialDeriveAdoptV30Response } from "../models";


export class ToolsHotMaterialDeriveAdoptV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveAdoptPost(toolsHotMaterialDeriveAdoptV30Request: ToolsHotMaterialDeriveAdoptV30Request): Promise<ToolsHotMaterialDeriveAdoptV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveAdoptPostWithHttpInfo(toolsHotMaterialDeriveAdoptV30Request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveAdoptPostWithHttpInfo(toolsHotMaterialDeriveAdoptV30Request: ToolsHotMaterialDeriveAdoptV30Request): Promise<ApiResponse<ToolsHotMaterialDeriveAdoptV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveAdoptV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/hot_material_derive/adopt/",
      queryParams: [

      ],
      body: toolsHotMaterialDeriveAdoptV30Request
    });
  }
}


