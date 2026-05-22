// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpMicroGameCreateV30Request, ToolsEbpMicroGameCreateV30Response } from "../models";


export class ToolsEbpMicroGameCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpMicroGameCreatePost(toolsEbpMicroGameCreateV30Request: ToolsEbpMicroGameCreateV30Request): Promise<ToolsEbpMicroGameCreateV30Response> {
    const response = await this.openApiV30ToolsEbpMicroGameCreatePostWithHttpInfo(toolsEbpMicroGameCreateV30Request);
    return response.data;
  }

  async openApiV30ToolsEbpMicroGameCreatePostWithHttpInfo(toolsEbpMicroGameCreateV30Request: ToolsEbpMicroGameCreateV30Request): Promise<ApiResponse<ToolsEbpMicroGameCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpMicroGameCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/micro_game/create/",
      queryParams: [

      ],
      body: toolsEbpMicroGameCreateV30Request
    });
  }
}


