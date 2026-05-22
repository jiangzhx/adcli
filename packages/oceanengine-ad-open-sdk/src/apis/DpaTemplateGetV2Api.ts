// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaTemplateGetV2Response } from "../models";


export class DpaTemplateGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaTemplateGetGet(advertiserId: number, page: number, pageSize: number): Promise<DpaTemplateGetV2Response> {
    const response = await this.openApi2DpaTemplateGetGetWithHttpInfo(advertiserId, page, pageSize);
    return response.data;
  }

  async openApi2DpaTemplateGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<DpaTemplateGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaTemplateGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaTemplateGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/template/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


