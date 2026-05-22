// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppExtendCreateV30Request, ToolsEbpAppExtendCreateV30Response } from "../models";


export class ToolsEbpAppExtendCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendCreatePost(toolsEbpAppExtendCreateV30Request: ToolsEbpAppExtendCreateV30Request): Promise<ToolsEbpAppExtendCreateV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendCreatePostWithHttpInfo(toolsEbpAppExtendCreateV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendCreatePostWithHttpInfo(toolsEbpAppExtendCreateV30Request: ToolsEbpAppExtendCreateV30Request): Promise<ApiResponse<ToolsEbpAppExtendCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app_extend/create/",
      queryParams: [

      ],
      body: toolsEbpAppExtendCreateV30Request
    });
  }
}


