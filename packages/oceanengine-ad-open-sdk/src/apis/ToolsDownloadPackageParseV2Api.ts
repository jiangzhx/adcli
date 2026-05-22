// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsDownloadPackageParseV2Request, ToolsDownloadPackageParseV2Response } from "../models";


export class ToolsDownloadPackageParseV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsDownloadPackageParsePost(toolsDownloadPackageParseV2Request: ToolsDownloadPackageParseV2Request): Promise<ToolsDownloadPackageParseV2Response> {
    const response = await this.openApi2ToolsDownloadPackageParsePostWithHttpInfo(toolsDownloadPackageParseV2Request);
    return response.data;
  }

  async openApi2ToolsDownloadPackageParsePostWithHttpInfo(toolsDownloadPackageParseV2Request: ToolsDownloadPackageParseV2Request): Promise<ApiResponse<ToolsDownloadPackageParseV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsDownloadPackageParseV2Response>({
      method: "POST",
      path: "/open_api/2/tools/download/package/parse/",
      queryParams: [

      ],
      body: toolsDownloadPackageParseV2Request
    });
  }
}


