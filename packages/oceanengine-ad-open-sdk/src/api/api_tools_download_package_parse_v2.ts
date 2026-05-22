// Generated from oceanengine/ad_open_sdk_go api/api_tools_download_package_parse_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsDownloadPackageParseV2Request, ToolsDownloadPackageParseV2Response } from "../models/index";


export interface ToolsDownloadPackageParseV2ApiOpenApi2ToolsDownloadPackageParsePostRequest {
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

  async openApi2ToolsDownloadPackageParsePost(request: ToolsDownloadPackageParseV2ApiOpenApi2ToolsDownloadPackageParsePostRequest): Promise<ToolsDownloadPackageParseV2Response> {
    const response = await this.openApi2ToolsDownloadPackageParsePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsDownloadPackageParsePostWithHttpInfo(request: ToolsDownloadPackageParseV2ApiOpenApi2ToolsDownloadPackageParsePostRequest): Promise<ApiResponse<ToolsDownloadPackageParseV2Response>> {

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


