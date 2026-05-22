// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplateCreateV2Request, ToolsSiteTemplateCreateV2Response } from "../models";


export class ToolsSiteTemplateCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplateCreatePost(request: ToolsSiteTemplateCreateV2Request): Promise<ToolsSiteTemplateCreateV2Response> {
    const response = await this.openApi2ToolsSiteTemplateCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplateCreatePostWithHttpInfo(request: ToolsSiteTemplateCreateV2Request): Promise<ApiResponse<ToolsSiteTemplateCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateCreateV2Response>({
      method: "POST",
      path: "/open_api/2/tools/site_template/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


