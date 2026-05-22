// Generated from oceanengine/ad_open_sdk_go api/api_tools_material_raise_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMaterialRaiseCreateV30Request, ToolsMaterialRaiseCreateV30Response } from "../models/index";


export interface ToolsMaterialRaiseCreateV30ApiOpenApiV30ToolsMaterialRaiseCreatePostRequest {
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

  async openApiV30ToolsMaterialRaiseCreatePost(request: ToolsMaterialRaiseCreateV30ApiOpenApiV30ToolsMaterialRaiseCreatePostRequest): Promise<ToolsMaterialRaiseCreateV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseCreatePostWithHttpInfo(request: ToolsMaterialRaiseCreateV30ApiOpenApiV30ToolsMaterialRaiseCreatePostRequest): Promise<ApiResponse<ToolsMaterialRaiseCreateV30Response>> {

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


