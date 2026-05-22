// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_app_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpAppUpdateV30Request, ToolsEbpAppUpdateV30Response } from "../models/index";


export interface ToolsEbpAppUpdateV30ApiOpenApiV30ToolsEbpAppUpdatePostRequest {
  toolsEbpAppUpdateV30Request?: ToolsEbpAppUpdateV30Request;
}

export class ToolsEbpAppUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpAppUpdatePost(request: ToolsEbpAppUpdateV30ApiOpenApiV30ToolsEbpAppUpdatePostRequest): Promise<ToolsEbpAppUpdateV30Response> {
    const response = await this.openApiV30ToolsEbpAppUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpAppUpdatePostWithHttpInfo(request: ToolsEbpAppUpdateV30ApiOpenApiV30ToolsEbpAppUpdatePostRequest): Promise<ApiResponse<ToolsEbpAppUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsEbpAppUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/ebp/app/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsEbpAppUpdateV30Request
    });
  }
}


