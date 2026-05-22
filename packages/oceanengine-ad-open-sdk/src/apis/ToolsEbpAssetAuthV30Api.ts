// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAssetAuthV30Request, ToolsEbpAssetAuthV30Response } from "../models";


export interface OpenApiV30ToolsEbpAssetAuthPostRequest {
  toolsEbpAssetAuthV30Request?: ToolsEbpAssetAuthV30Request;
}

export class ToolsEbpAssetAuthV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAssetAuthPost(request: OpenApiV30ToolsEbpAssetAuthPostRequest): Promise<ToolsEbpAssetAuthV30Response> {
    const response = await this.openApiV30ToolsEbpAssetAuthPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAssetAuthPostWithHttpInfo(request: OpenApiV30ToolsEbpAssetAuthPostRequest): Promise<ApiResponse<ToolsEbpAssetAuthV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAssetAuthV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/asset/auth/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAssetAuthV30Request
    });
  }
}


