// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroGameUpdateV30Request, ToolsEbpMicroGameUpdateV30Response } from "../models";


export interface OpenApiV30ToolsEbpMicroGameUpdatePostRequest {
  toolsEbpMicroGameUpdateV30Request?: ToolsEbpMicroGameUpdateV30Request;
}

export class ToolsEbpMicroGameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameUpdatePost(request: OpenApiV30ToolsEbpMicroGameUpdatePostRequest): Promise<ToolsEbpMicroGameUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameUpdatePostWithHttpInfo(request: OpenApiV30ToolsEbpMicroGameUpdatePostRequest): Promise<ApiResponse<ToolsEbpMicroGameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_game/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMicroGameUpdateV30Request
    });
  }
}


