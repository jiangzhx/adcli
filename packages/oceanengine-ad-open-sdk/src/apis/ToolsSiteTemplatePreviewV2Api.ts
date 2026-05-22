// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplatePreviewV2Response } from "../models";


export interface OpenApi2ToolsSiteTemplatePreviewGetRequest {
  advertiserId: number;
  templateId: number;
}

export class ToolsSiteTemplatePreviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplatePreviewGet(request: OpenApi2ToolsSiteTemplatePreviewGetRequest): Promise<ToolsSiteTemplatePreviewV2Response> {
    const response = await this.openApi2ToolsSiteTemplatePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplatePreviewGetWithHttpInfo(request: OpenApi2ToolsSiteTemplatePreviewGetRequest): Promise<ApiResponse<ToolsSiteTemplatePreviewV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteTemplatePreviewGet");
    }

    if (request.templateId == null) {
      throw new ApiException("Missing the required parameter 'templateId' when calling openApi2ToolsSiteTemplatePreviewGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplatePreviewV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site_template/preview/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "template_id", value: request.templateId }
      ]
    });
  }
}


