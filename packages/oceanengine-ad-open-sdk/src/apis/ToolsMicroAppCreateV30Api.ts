// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroAppCreateV30Request, ToolsMicroAppCreateV30Response } from "../models";


export class ToolsMicroAppCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroAppCreatePost(request: ToolsMicroAppCreateV30Request): Promise<ToolsMicroAppCreateV30Response> {
    const response = await this.openApiV30ToolsMicroAppCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroAppCreatePostWithHttpInfo(request: ToolsMicroAppCreateV30Request): Promise<ApiResponse<ToolsMicroAppCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsMicroAppCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_app/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


