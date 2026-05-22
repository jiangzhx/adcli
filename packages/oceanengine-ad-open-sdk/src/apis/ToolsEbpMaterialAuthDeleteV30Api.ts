// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMaterialAuthDeleteV30Request, ToolsEbpMaterialAuthDeleteV30Response } from "../models";


export class ToolsEbpMaterialAuthDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthDeletePost(toolsEbpMaterialAuthDeleteV30Request: ToolsEbpMaterialAuthDeleteV30Request): Promise<ToolsEbpMaterialAuthDeleteV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthDeletePostWithHttpInfo(toolsEbpMaterialAuthDeleteV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthDeletePostWithHttpInfo(toolsEbpMaterialAuthDeleteV30Request: ToolsEbpMaterialAuthDeleteV30Request): Promise<ApiResponse<ToolsEbpMaterialAuthDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/material/auth/delete/",
      queryParams: [

      ],
      body: toolsEbpMaterialAuthDeleteV30Request
    });
  }
}


