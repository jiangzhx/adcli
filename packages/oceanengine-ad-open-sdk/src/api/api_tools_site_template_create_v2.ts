// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_template_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteTemplateCreateV2Request, ToolsSiteTemplateCreateV2Response } from "../models/index";


export interface ToolsSiteTemplateCreateV2ApiOpenApi2ToolsSiteTemplateCreatePostRequest {
  toolsSiteTemplateCreateV2Request?: ToolsSiteTemplateCreateV2Request;
}

export class ToolsSiteTemplateCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplateCreatePost(request: ToolsSiteTemplateCreateV2ApiOpenApi2ToolsSiteTemplateCreatePostRequest): Promise<ToolsSiteTemplateCreateV2Response> {
    const response = await this.openApi2ToolsSiteTemplateCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplateCreatePostWithHttpInfo(request: ToolsSiteTemplateCreateV2ApiOpenApi2ToolsSiteTemplateCreatePostRequest): Promise<ApiResponse<ToolsSiteTemplateCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site_template/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteTemplateCreateV2Request
    });
  }
}


