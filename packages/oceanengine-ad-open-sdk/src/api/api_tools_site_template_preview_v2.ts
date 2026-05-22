// Generated from oceanengine/ad_open_sdk_go api/api_tools_site_template_preview_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsSiteTemplatePreviewV2Response } from "../models/index";


export interface ToolsSiteTemplatePreviewV2ApiOpenApi2ToolsSiteTemplatePreviewGetRequest {
  advertiserId: number | string;
  templateId: number | string;
}

export class ToolsSiteTemplatePreviewV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplatePreviewGet(request: ToolsSiteTemplatePreviewV2ApiOpenApi2ToolsSiteTemplatePreviewGetRequest): Promise<ToolsSiteTemplatePreviewV2Response> {
    const response = await this.openApi2ToolsSiteTemplatePreviewGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplatePreviewGetWithHttpInfo(request: ToolsSiteTemplatePreviewV2ApiOpenApi2ToolsSiteTemplatePreviewGetRequest): Promise<ApiResponse<ToolsSiteTemplatePreviewV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.templateId == null) {
      throw new ApiException("templateId is required and must be specified");
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


