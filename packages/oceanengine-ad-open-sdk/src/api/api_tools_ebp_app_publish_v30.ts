// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_publish_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppPublishV30Request, ToolsEbpAppPublishV30Response } from "../models/index";


export interface ToolsEbpAppPublishV30ApiOpenApiV30ToolsEbpAppPublishPostRequest {
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

  async openApiV30ToolsEbpAppPublishPost(request: ToolsEbpAppPublishV30ApiOpenApiV30ToolsEbpAppPublishPostRequest): Promise<ToolsEbpAppPublishV30Response> {
    const response = await this.openApiV30ToolsEbpAppPublishPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppPublishPostWithHttpInfo(request: ToolsEbpAppPublishV30ApiOpenApiV30ToolsEbpAppPublishPostRequest): Promise<ApiResponse<ToolsEbpAppPublishV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppPublishV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app/publish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAppPublishV30Request
    });
  }
}


