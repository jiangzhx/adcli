// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordProjectAddV30Request, ToolsPrivativeWordProjectAddV30Response } from "../models";


export class ToolsPrivativeWordProjectAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordProjectAddPost(toolsPrivativeWordProjectAddV30Request: ToolsPrivativeWordProjectAddV30Request): Promise<ToolsPrivativeWordProjectAddV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordProjectAddPostWithHttpInfo(toolsPrivativeWordProjectAddV30Request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordProjectAddPostWithHttpInfo(toolsPrivativeWordProjectAddV30Request: ToolsPrivativeWordProjectAddV30Request): Promise<ApiResponse<ToolsPrivativeWordProjectAddV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordProjectAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/project/add/",
      queryParams: [

      ],
      body: toolsPrivativeWordProjectAddV30Request
    });
  }
}


