// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_project_add_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordProjectAddV30Request, ToolsPrivativeWordProjectAddV30Response } from "../models/index";


export interface ToolsPrivativeWordProjectAddV30ApiOpenApiV30ToolsPrivativeWordProjectAddPostRequest {
  toolsPrivativeWordProjectAddV30Request?: ToolsPrivativeWordProjectAddV30Request;
}

export class ToolsPrivativeWordProjectAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordProjectAddPost(request: ToolsPrivativeWordProjectAddV30ApiOpenApiV30ToolsPrivativeWordProjectAddPostRequest): Promise<ToolsPrivativeWordProjectAddV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordProjectAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordProjectAddPostWithHttpInfo(request: ToolsPrivativeWordProjectAddV30ApiOpenApiV30ToolsPrivativeWordProjectAddPostRequest): Promise<ApiResponse<ToolsPrivativeWordProjectAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordProjectAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/project/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordProjectAddV30Request
    });
  }
}


