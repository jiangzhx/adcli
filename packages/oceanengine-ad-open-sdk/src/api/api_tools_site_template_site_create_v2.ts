// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_template_site_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteTemplateSiteCreateV2Request, ToolsSiteTemplateSiteCreateV2Response } from "../models/index";


export interface ToolsSiteTemplateSiteCreateV2ApiOpenApi2ToolsSiteTemplateSiteCreatePostRequest {
  toolsSiteTemplateSiteCreateV2Request?: ToolsSiteTemplateSiteCreateV2Request;
}

export class ToolsSiteTemplateSiteCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplateSiteCreatePost(request: ToolsSiteTemplateSiteCreateV2ApiOpenApi2ToolsSiteTemplateSiteCreatePostRequest): Promise<ToolsSiteTemplateSiteCreateV2Response> {
    const response = await this.openApi2ToolsSiteTemplateSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplateSiteCreatePostWithHttpInfo(request: ToolsSiteTemplateSiteCreateV2ApiOpenApi2ToolsSiteTemplateSiteCreatePostRequest): Promise<ApiResponse<ToolsSiteTemplateSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site_template/site/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsSiteTemplateSiteCreateV2Request
    });
  }
}


