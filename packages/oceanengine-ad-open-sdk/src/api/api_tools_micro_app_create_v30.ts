// Generated from oceanengine/ad_open_sdk_go api/api_tools_micro_app_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMicroAppCreateV30Request, ToolsMicroAppCreateV30Response } from "../models/index";


export interface ToolsMicroAppCreateV30ApiOpenApiV30ToolsMicroAppCreatePostRequest {
  toolsMicroAppCreateV30Request?: ToolsMicroAppCreateV30Request;
}

export class ToolsMicroAppCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppCreatePost(request: ToolsMicroAppCreateV30ApiOpenApiV30ToolsMicroAppCreatePostRequest): Promise<ToolsMicroAppCreateV30Response> {
    const response = await this.openApiV30ToolsMicroAppCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroAppCreatePostWithHttpInfo(request: ToolsMicroAppCreateV30ApiOpenApiV30ToolsMicroAppCreatePostRequest): Promise<ApiResponse<ToolsMicroAppCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroAppCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_app/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMicroAppCreateV30Request
    });
  }
}


