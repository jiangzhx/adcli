// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordProjectUpdateV30Request, ToolsPrivativeWordProjectUpdateV30Response } from "../models";


export interface OpenApiV30ToolsPrivativeWordProjectUpdatePostRequest {
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

  async openApiV30ToolsPrivativeWordProjectUpdatePost(request: OpenApiV30ToolsPrivativeWordProjectUpdatePostRequest): Promise<ToolsPrivativeWordProjectUpdateV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordProjectUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordProjectUpdatePostWithHttpInfo(request: OpenApiV30ToolsPrivativeWordProjectUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordProjectUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordProjectUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/project/update/",
      queryParams: [

      ],
      body: request.toolsPrivativeWordProjectUpdateV30Request
    });
  }
}


