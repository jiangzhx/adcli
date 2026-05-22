// Generated from oceanengine/ad_open_sdk_go api/api_tools_privative_word_batch_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPrivativeWordBatchGetV30Request, ToolsPrivativeWordBatchGetV30Response } from "../models/index";


export interface ToolsPrivativeWordBatchGetV30ApiOpenApiV30ToolsPrivativeWordBatchGetPostRequest {
  toolsPrivativeWordBatchGetV30Request?: ToolsPrivativeWordBatchGetV30Request;
}

export class ToolsPrivativeWordBatchGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordBatchGetPost(request: ToolsPrivativeWordBatchGetV30ApiOpenApiV30ToolsPrivativeWordBatchGetPostRequest): Promise<ToolsPrivativeWordBatchGetV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordBatchGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordBatchGetPostWithHttpInfo(request: ToolsPrivativeWordBatchGetV30ApiOpenApiV30ToolsPrivativeWordBatchGetPostRequest): Promise<ApiResponse<ToolsPrivativeWordBatchGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordBatchGetV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/batch_get/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordBatchGetV30Request
    });
  }
}


