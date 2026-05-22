// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAppExtendUpdateV30Request, ToolsEbpAppExtendUpdateV30Response } from "../models";


export class ToolsEbpAppExtendUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendUpdatePost(request: ToolsEbpAppExtendUpdateV30Request): Promise<ToolsEbpAppExtendUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendUpdatePostWithHttpInfo(request: ToolsEbpAppExtendUpdateV30Request): Promise<ApiResponse<ToolsEbpAppExtendUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app_extend/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


