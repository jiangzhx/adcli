// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplateSiteCreateV2Request, ToolsSiteTemplateSiteCreateV2Response } from "../models";


export interface OpenApi2ToolsSiteTemplateSiteCreatePostRequest {
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

  async openApi2ToolsSiteTemplateSiteCreatePost(request: OpenApi2ToolsSiteTemplateSiteCreatePostRequest): Promise<ToolsSiteTemplateSiteCreateV2Response> {
    const response = await this.openApi2ToolsSiteTemplateSiteCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplateSiteCreatePostWithHttpInfo(request: OpenApi2ToolsSiteTemplateSiteCreatePostRequest): Promise<ApiResponse<ToolsSiteTemplateSiteCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateSiteCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site_template/site/create/",
      queryParams: [

      ],
      body: request.toolsSiteTemplateSiteCreateV2Request
    });
  }
}


