// Generated from oceanengine/ad_open_sdk_go api/api_tools_micro_app_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMicroAppUpdateV30Request, ToolsMicroAppUpdateV30Response } from "../models/index";


export interface ToolsMicroAppUpdateV30ApiOpenApiV30ToolsMicroAppUpdatePostRequest {
  toolsMicroAppUpdateV30Request?: ToolsMicroAppUpdateV30Request;
}

export class ToolsMicroAppUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppUpdatePost(request: ToolsMicroAppUpdateV30ApiOpenApiV30ToolsMicroAppUpdatePostRequest): Promise<ToolsMicroAppUpdateV30Response> {
    const response = await this.openApiV30ToolsMicroAppUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroAppUpdatePostWithHttpInfo(request: ToolsMicroAppUpdateV30ApiOpenApiV30ToolsMicroAppUpdatePostRequest): Promise<ApiResponse<ToolsMicroAppUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroAppUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_app/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMicroAppUpdateV30Request
    });
  }
}


