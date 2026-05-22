// Generated from oceanengine/ad_open_sdk_go api/api_tools_material_raise_stop_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMaterialRaiseStopV30Request, ToolsMaterialRaiseStopV30Response } from "../models/index";


export interface ToolsMaterialRaiseStopV30ApiOpenApiV30ToolsMaterialRaiseStopPostRequest {
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

  async openApiV30ToolsMaterialRaiseStopPost(request: ToolsMaterialRaiseStopV30ApiOpenApiV30ToolsMaterialRaiseStopPostRequest): Promise<ToolsMaterialRaiseStopV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(request: ToolsMaterialRaiseStopV30ApiOpenApiV30ToolsMaterialRaiseStopPostRequest): Promise<ApiResponse<ToolsMaterialRaiseStopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseStopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/material_raise/stop/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMaterialRaiseStopV30Request
    });
  }
}


