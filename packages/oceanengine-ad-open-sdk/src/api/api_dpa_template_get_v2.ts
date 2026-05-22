// Generated from oceanengine/ad_open_sdk_go api/api_dpa_template_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaTemplateGetV2Response } from "../models/index";


export interface DpaTemplateGetV2ApiOpenApi2DpaTemplateGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class DpaTemplateGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DpaTemplateGetGet(request: DpaTemplateGetV2ApiOpenApi2DpaTemplateGetGetRequest): Promise<DpaTemplateGetV2Response> {
    const response = await this.openApi2DpaTemplateGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DpaTemplateGetGetWithHttpInfo(request: DpaTemplateGetV2ApiOpenApi2DpaTemplateGetGetRequest): Promise<ApiResponse<DpaTemplateGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DpaTemplateGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaTemplateGetV2Response>({
      method: "GET",
      path: "/open_api/2/dpa/template/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


