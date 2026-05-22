// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPrivativeWordAdAddV2Request, ToolsPrivativeWordAdAddV2Response } from "../models";


export class ToolsPrivativeWordAdAddV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPrivativeWordAdAddPost(request: ToolsPrivativeWordAdAddV2Request): Promise<ToolsPrivativeWordAdAddV2Response> {
    const response = await this.openApi2ToolsPrivativeWordAdAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPrivativeWordAdAddPostWithHttpInfo(request: ToolsPrivativeWordAdAddV2Request): Promise<ApiResponse<ToolsPrivativeWordAdAddV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsPrivativeWordAdAddV2Response>({
      method: "POST",
      path: "/open_api/2/tools/privative_word/ad/add/",
      queryParams: [

      ],
      body: request
    });
  }
}


