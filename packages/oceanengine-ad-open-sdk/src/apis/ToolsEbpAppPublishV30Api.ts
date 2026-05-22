// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppPublishV30Request, ToolsEbpAppPublishV30Response } from "../models";


export interface OpenApiV30ToolsEbpAppPublishPostRequest {
  toolsEbpAppPublishV30Request?: ToolsEbpAppPublishV30Request;
}

export class ToolsEbpAppPublishV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppPublishPost(request: OpenApiV30ToolsEbpAppPublishPostRequest): Promise<ToolsEbpAppPublishV30Response> {
    const response = await this.openApiV30ToolsEbpAppPublishPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppPublishPostWithHttpInfo(request: OpenApiV30ToolsEbpAppPublishPostRequest): Promise<ApiResponse<ToolsEbpAppPublishV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppPublishV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app/publish/",
      queryParams: [

      ],
      body: request.toolsEbpAppPublishV30Request
    });
  }
}


