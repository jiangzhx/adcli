// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplatePicUrlGetV2Response } from "../models";


export interface OpenApi2ToolsSiteTemplatePicUrlGetGetRequest {
  advertiserId: number;
  siteId?: number;
  templateId?: number;
}

export class ToolsSiteTemplatePicUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGet(request: OpenApi2ToolsSiteTemplatePicUrlGetGetRequest): Promise<ToolsSiteTemplatePicUrlGetV2Response> {
    const response = await this.openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(request: OpenApi2ToolsSiteTemplatePicUrlGetGetRequest): Promise<ApiResponse<ToolsSiteTemplatePicUrlGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteTemplatePicUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplatePicUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site_template/pic_url/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId },
        { name: "template_id", value: request.templateId }
      ]
    });
  }
}


