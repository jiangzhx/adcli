// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpAssetAuthCancelV30Request, ToolsEbpAssetAuthCancelV30Response } from "../models";


export class ToolsEbpAssetAuthCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAssetAuthCancelPost(request: ToolsEbpAssetAuthCancelV30Request): Promise<ToolsEbpAssetAuthCancelV30Response> {
    const response = await this.openApiV30ToolsEbpAssetAuthCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAssetAuthCancelPostWithHttpInfo(request: ToolsEbpAssetAuthCancelV30Request): Promise<ApiResponse<ToolsEbpAssetAuthCancelV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsEbpAssetAuthCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/asset/auth/cancel/",
      queryParams: [

      ],
      body: request
    });
  }
}


