// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_project_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordProjectUpdateV30Request, ToolsPrivativeWordProjectUpdateV30Response } from "../models/index";


export interface ToolsPrivativeWordProjectUpdateV30ApiOpenApiV30ToolsPrivativeWordProjectUpdatePostRequest {
  toolsPrivativeWordProjectUpdateV30Request?: ToolsPrivativeWordProjectUpdateV30Request;
}

export class ToolsPrivativeWordProjectUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordProjectUpdatePost(request: ToolsPrivativeWordProjectUpdateV30ApiOpenApiV30ToolsPrivativeWordProjectUpdatePostRequest): Promise<ToolsPrivativeWordProjectUpdateV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordProjectUpdatePostWithHttpInfo(request: ToolsPrivativeWordProjectUpdateV30ApiOpenApiV30ToolsPrivativeWordProjectUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/project/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordProjectUpdateV30Request
    });
  }
}


