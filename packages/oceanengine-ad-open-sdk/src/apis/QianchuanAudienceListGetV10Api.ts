// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceListGetV10Filtering, QianchuanAudienceListGetV10Response } from "../models";


export interface OpenApiV10QianchuanAudienceListGetGetRequest {
  advertiserId: number;
  filtering?: QianchuanAudienceListGetV10Filtering;
  page?: number;
  pageSize?: number;
}

export class QianchuanAudienceListGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceListGetGet(request: OpenApiV10QianchuanAudienceListGetGetRequest): Promise<QianchuanAudienceListGetV10Response> {
    const response = await this.openApiV10QianchuanAudienceListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceListGetGetWithHttpInfo(request: OpenApiV10QianchuanAudienceListGetGetRequest): Promise<ApiResponse<QianchuanAudienceListGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceListGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/audience_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


