// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMaterialRaiseCreateV30Request, ToolsMaterialRaiseCreateV30Response } from "../models";


export interface OpenApiV30ToolsMaterialRaiseCreatePostRequest {
  toolsMaterialRaiseCreateV30Request?: ToolsMaterialRaiseCreateV30Request;
}

export class ToolsMaterialRaiseCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseCreatePost(request: OpenApiV30ToolsMaterialRaiseCreatePostRequest): Promise<ToolsMaterialRaiseCreateV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseCreatePostWithHttpInfo(request: OpenApiV30ToolsMaterialRaiseCreatePostRequest): Promise<ApiResponse<ToolsMaterialRaiseCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/material_raise/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMaterialRaiseCreateV30Request
    });
  }
}


