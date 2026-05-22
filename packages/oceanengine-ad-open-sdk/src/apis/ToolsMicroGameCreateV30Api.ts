// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroGameCreateV30Request, ToolsMicroGameCreateV30Response } from "../models";


export interface OpenApiV30ToolsMicroGameCreatePostRequest {
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

  async openApiV30ToolsMicroGameCreatePost(request: OpenApiV30ToolsMicroGameCreatePostRequest): Promise<ToolsMicroGameCreateV30Response> {
    const response = await this.openApiV30ToolsMicroGameCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameCreatePostWithHttpInfo(request: OpenApiV30ToolsMicroGameCreatePostRequest): Promise<ApiResponse<ToolsMicroGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_game/create/",
      queryParams: [

      ],
      body: request.toolsMicroGameCreateV30Request
    });
  }
}


