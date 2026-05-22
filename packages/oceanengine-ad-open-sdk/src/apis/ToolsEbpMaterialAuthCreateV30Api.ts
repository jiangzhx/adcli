// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMaterialAuthCreateV30Request, ToolsEbpMaterialAuthCreateV30Response } from "../models";


export class ToolsEbpMaterialAuthCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMaterialAuthCreatePost(request: ToolsEbpMaterialAuthCreateV30Request): Promise<ToolsEbpMaterialAuthCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMaterialAuthCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMaterialAuthCreatePostWithHttpInfo(request: ToolsEbpMaterialAuthCreateV30Request): Promise<ApiResponse<ToolsEbpMaterialAuthCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpMaterialAuthCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/material/auth/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


