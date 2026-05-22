// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroGameUpdateV30Request, ToolsMicroGameUpdateV30Response } from "../models";


export interface OpenApiV30ToolsMicroGameUpdatePostRequest {
  toolsMicroGameUpdateV30Request?: ToolsMicroGameUpdateV30Request;
}

export class ToolsMicroGameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameUpdatePost(request: OpenApiV30ToolsMicroGameUpdatePostRequest): Promise<ToolsMicroGameUpdateV30Response> {
    const response = await this.openApiV30ToolsMicroGameUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameUpdatePostWithHttpInfo(request: OpenApiV30ToolsMicroGameUpdatePostRequest): Promise<ApiResponse<ToolsMicroGameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroGameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_game/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMicroGameUpdateV30Request
    });
  }
}


