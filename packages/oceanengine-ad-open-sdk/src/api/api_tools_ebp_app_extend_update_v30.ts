// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_extend_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppExtendUpdateV30Request, ToolsEbpAppExtendUpdateV30Response } from "../models/index";


export interface ToolsEbpAppExtendUpdateV30ApiOpenApiV30ToolsEbpAppExtendUpdatePostRequest {
  toolsEbpAppExtendUpdateV30Request?: ToolsEbpAppExtendUpdateV30Request;
}

export class ToolsEbpAppExtendUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppExtendUpdatePost(request: ToolsEbpAppExtendUpdateV30ApiOpenApiV30ToolsEbpAppExtendUpdatePostRequest): Promise<ToolsEbpAppExtendUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpAppExtendUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppExtendUpdatePostWithHttpInfo(request: ToolsEbpAppExtendUpdateV30ApiOpenApiV30ToolsEbpAppExtendUpdatePostRequest): Promise<ApiResponse<ToolsEbpAppExtendUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppExtendUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app_extend/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAppExtendUpdateV30Request
    });
  }
}


