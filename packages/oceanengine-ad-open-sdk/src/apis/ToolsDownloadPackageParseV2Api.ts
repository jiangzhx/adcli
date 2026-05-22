// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsDownloadPackageParseV2Request, ToolsDownloadPackageParseV2Response } from "../models";


export interface OpenApi2ToolsDownloadPackageParsePostRequest {
  toolsDownloadPackageParseV2Request?: ToolsDownloadPackageParseV2Request;
}

export class ToolsDownloadPackageParseV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsDownloadPackageParsePost(request: OpenApi2ToolsDownloadPackageParsePostRequest): Promise<ToolsDownloadPackageParseV2Response> {
    const response = await this.openApi2ToolsDownloadPackageParsePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsDownloadPackageParsePostWithHttpInfo(request: OpenApi2ToolsDownloadPackageParsePostRequest): Promise<ApiResponse<ToolsDownloadPackageParseV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsDownloadPackageParseV2Response>({
      method: "POST",
      path: "/open_api/2/tools/download/package/parse/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsDownloadPackageParseV2Request
    });
  }
}


