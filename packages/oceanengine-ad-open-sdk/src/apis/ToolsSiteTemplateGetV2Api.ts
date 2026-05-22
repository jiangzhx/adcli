// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplateGetV2Filter, ToolsSiteTemplateGetV2Response } from "../models";


export interface OpenApi2ToolsSiteTemplateGetGetRequest {
  advertiserId: number | string;
  filter?: ToolsSiteTemplateGetV2Filter;
  page?: number;
  pageSize?: number;
}

export class ToolsSiteTemplateGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplateGetGet(request: OpenApi2ToolsSiteTemplateGetGetRequest): Promise<ToolsSiteTemplateGetV2Response> {
    const response = await this.openApi2ToolsSiteTemplateGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteTemplateGetGetWithHttpInfo(request: OpenApi2ToolsSiteTemplateGetGetRequest): Promise<ApiResponse<ToolsSiteTemplateGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteTemplateGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site_template/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filter", value: request.filter },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


