// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsMaterialRaiseStopV30Request, ToolsMaterialRaiseStopV30Response } from "../models";


export class ToolsMaterialRaiseStopV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMaterialRaiseStopPost(toolsMaterialRaiseStopV30Request: ToolsMaterialRaiseStopV30Request): Promise<ToolsMaterialRaiseStopV30Response> {
    const response = await this.openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(toolsMaterialRaiseStopV30Request);
    return response.data;
  }

  async openApiV30ToolsMaterialRaiseStopPostWithHttpInfo(toolsMaterialRaiseStopV30Request: ToolsMaterialRaiseStopV30Request): Promise<ApiResponse<ToolsMaterialRaiseStopV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMaterialRaiseStopV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/material_raise/stop/",
      queryParams: [

      ],
      body: toolsMaterialRaiseStopV30Request
    });
  }
}


