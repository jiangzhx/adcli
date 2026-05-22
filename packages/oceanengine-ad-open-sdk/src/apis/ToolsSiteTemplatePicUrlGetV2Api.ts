// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplatePicUrlGetV2Response } from "../models";


export class ToolsSiteTemplatePicUrlGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGet(advertiserId: number, siteId: number, templateId: number): Promise<ToolsSiteTemplatePicUrlGetV2Response> {
    const response = await this.openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(advertiserId, siteId, templateId);
    return response.data;
  }

  async openApi2ToolsSiteTemplatePicUrlGetGetWithHttpInfo(advertiserId: number, siteId: number, templateId: number): Promise<ApiResponse<ToolsSiteTemplatePicUrlGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteTemplatePicUrlGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplatePicUrlGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site_template/pic_url/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "site_id", value: siteId },
        { name: "template_id", value: templateId }
      ]
    });
  }
}


