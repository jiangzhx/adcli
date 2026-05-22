// Generated from oceanengine/ad_open_sdk_go api/api_tools_micro_game_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMicroGameCreateV30Request, ToolsMicroGameCreateV30Response } from "../models/index";


export interface ToolsMicroGameCreateV30ApiOpenApiV30ToolsMicroGameCreatePostRequest {
  toolsMicroGameCreateV30Request?: ToolsMicroGameCreateV30Request;
}

export class ToolsMicroGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameCreatePost(request: ToolsMicroGameCreateV30ApiOpenApiV30ToolsMicroGameCreatePostRequest): Promise<ToolsMicroGameCreateV30Response> {
    const response = await this.openApiV30ToolsMicroGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameCreatePostWithHttpInfo(request: ToolsMicroGameCreateV30ApiOpenApiV30ToolsMicroGameCreatePostRequest): Promise<ApiResponse<ToolsMicroGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_game/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMicroGameCreateV30Request
    });
  }
}


