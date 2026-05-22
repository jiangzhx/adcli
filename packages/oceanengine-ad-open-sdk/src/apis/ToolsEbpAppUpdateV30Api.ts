// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppUpdateV30Request, ToolsEbpAppUpdateV30Response } from "../models";


export class ToolsEbpAppUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppUpdatePost(request: ToolsEbpAppUpdateV30Request): Promise<ToolsEbpAppUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpAppUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppUpdatePostWithHttpInfo(request: ToolsEbpAppUpdateV30Request): Promise<ApiResponse<ToolsEbpAppUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


