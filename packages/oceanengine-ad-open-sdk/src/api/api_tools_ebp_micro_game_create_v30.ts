// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_micro_game_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpMicroGameCreateV30Request, ToolsEbpMicroGameCreateV30Response } from "../models/index";


export interface ToolsEbpMicroGameCreateV30ApiOpenApiV30ToolsEbpMicroGameCreatePostRequest {
  toolsEbpMicroGameCreateV30Request?: ToolsEbpMicroGameCreateV30Request;
}

export class ToolsEbpMicroGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameCreatePost(request: ToolsEbpMicroGameCreateV30ApiOpenApiV30ToolsEbpMicroGameCreatePostRequest): Promise<ToolsEbpMicroGameCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameCreatePostWithHttpInfo(request: ToolsEbpMicroGameCreateV30ApiOpenApiV30ToolsEbpMicroGameCreatePostRequest): Promise<ApiResponse<ToolsEbpMicroGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_game/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpMicroGameCreateV30Request
    });
  }
}


