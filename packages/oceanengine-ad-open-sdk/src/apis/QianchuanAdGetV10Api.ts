// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdGetV10Filtering, QianchuanAdGetV10Response } from "../models";


export interface OpenApiV10QianchuanAdGetGetRequest {
  advertiserId: number | string;
  filtering: QianchuanAdGetV10Filtering;
  requestAwemeInfo?: number;
  page?: number;
  pageSize?: number;
}

export class QianchuanAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdGetGet(request: OpenApiV10QianchuanAdGetGetRequest): Promise<QianchuanAdGetV10Response> {
    const response = await this.openApiV10QianchuanAdGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdGetGetWithHttpInfo(request: OpenApiV10QianchuanAdGetGetRequest): Promise<ApiResponse<QianchuanAdGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdGetGet");
    }

    if (request.filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "request_aweme_info", value: request.requestAwemeInfo },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


