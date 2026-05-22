// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpVideoUpdateV30Request, ToolsEbpVideoUpdateV30Response } from "../models";


export class ToolsEbpVideoUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpVideoUpdatePost(request: ToolsEbpVideoUpdateV30Request): Promise<ToolsEbpVideoUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpVideoUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpVideoUpdatePostWithHttpInfo(request: ToolsEbpVideoUpdateV30Request): Promise<ApiResponse<ToolsEbpVideoUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpVideoUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/video/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


