// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_game_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroGameUpdateV30Request, ToolsEbpMicroGameUpdateV30Response } from "../models/index";


export interface ToolsEbpMicroGameUpdateV30ApiOpenApiV30ToolsEbpMicroGameUpdatePostRequest {
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

  async openApiV30ToolsEbpMicroGameUpdatePost(request: ToolsEbpMicroGameUpdateV30ApiOpenApiV30ToolsEbpMicroGameUpdatePostRequest): Promise<ToolsEbpMicroGameUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameUpdatePostWithHttpInfo(request: ToolsEbpMicroGameUpdateV30ApiOpenApiV30ToolsEbpMicroGameUpdatePostRequest): Promise<ApiResponse<ToolsEbpMicroGameUpdateV30Response>> {

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


