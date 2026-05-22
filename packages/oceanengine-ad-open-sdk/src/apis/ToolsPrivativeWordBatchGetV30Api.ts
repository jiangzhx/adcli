// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordBatchGetV30Request, ToolsPrivativeWordBatchGetV30Response } from "../models";


export class ToolsPrivativeWordBatchGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsPrivativeWordBatchGetPost(request: ToolsPrivativeWordBatchGetV30Request): Promise<ToolsPrivativeWordBatchGetV30Response> {
    const response = await this.openApiV30ToolsPrivativeWordBatchGetPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsPrivativeWordBatchGetPostWithHttpInfo(request: ToolsPrivativeWordBatchGetV30Request): Promise<ApiResponse<ToolsPrivativeWordBatchGetV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordBatchGetV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/privative_word/batch_get/",
      queryParams: [

      ],
      body: request
    });
  }
}


