// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMaterialRaiseStopV30Request, ToolsMaterialRaiseStopV30Response } from "../models";


export interface OpenApiV30ToolsMaterialRaiseStopPostRequest {
  toolsMaterialRaiseStopV30Request?: ToolsMaterialRaiseStopV30Request;
}

export class ToolsMaterialRaiseStopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseStopPost(request: OpenApiV30ToolsMaterialRaiseStopPostRequest): Promise<ToolsMaterialRaiseStopV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(request: OpenApiV30ToolsMaterialRaiseStopPostRequest): Promise<ApiResponse<ToolsMaterialRaiseStopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseStopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/material_raise/stop/",
      queryParams: [

      ],
      body: request.toolsMaterialRaiseStopV30Request
    });
  }
}


