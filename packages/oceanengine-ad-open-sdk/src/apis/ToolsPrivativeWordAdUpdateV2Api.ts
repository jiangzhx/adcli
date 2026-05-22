// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordAdUpdateV2Request, ToolsPrivativeWordAdUpdateV2Response } from "../models";


export interface OpenApi2ToolsPrivativeWordAdUpdatePostRequest {
  toolsPrivativeWordAdUpdateV2Request?: ToolsPrivativeWordAdUpdateV2Request;
}

export class ToolsPrivativeWordAdUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordAdUpdatePost(request: OpenApi2ToolsPrivativeWordAdUpdatePostRequest): Promise<ToolsPrivativeWordAdUpdateV2Response> {
    const response = await this.openApi2ToolsPrivativeWordAdUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordAdUpdatePostWithHttpInfo(request: OpenApi2ToolsPrivativeWordAdUpdatePostRequest): Promise<ApiResponse<ToolsPrivativeWordAdUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordAdUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/ad/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsPrivativeWordAdUpdateV2Request
    });
  }
}


