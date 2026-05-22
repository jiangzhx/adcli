// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_template_pic_url_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteTemplatePicUrlGetV2Response } from "../models/index";


export interface ToolsSiteTemplatePicUrlGetV2ApiOpenApi2ToolsSiteTemplatePicUrlGetGetRequest {
  advertiserId: number | string;
  siteId?: number | string;
  templateId?: number | string;
}

export class ToolsSiteTemplatePicUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGet(request: ToolsSiteTemplatePicUrlGetV2ApiOpenApi2ToolsSiteTemplatePicUrlGetGetRequest): Promise<ToolsSiteTemplatePicUrlGetV2Response> {
    const response = await this.openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(request: ToolsSiteTemplatePicUrlGetV2ApiOpenApi2ToolsSiteTemplatePicUrlGetGetRequest): Promise<ApiResponse<ToolsSiteTemplatePicUrlGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


