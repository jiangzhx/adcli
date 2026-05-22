// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteTemplateGetV2Filter, ToolsSiteTemplateGetV2Response } from "../models";


export class ToolsSiteTemplateGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteTemplateGetGet(advertiserId: number, filter: ToolsSiteTemplateGetV2Filter, page: number, pageSize: number): Promise<ToolsSiteTemplateGetV2Response> {
    const response = await this.openApi2ToolsSiteTemplateGetGetWithHttpInfo(advertiserId, filter, page, pageSize);
    return response.data;
  }

  async openApi2ToolsSiteTemplateGetGetWithHttpInfo(advertiserId: number, filter: ToolsSiteTemplateGetV2Filter, page: number, pageSize: number): Promise<ApiResponse<ToolsSiteTemplateGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsSiteTemplateGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsSiteTemplateGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site_template/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filter", value: filter },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


