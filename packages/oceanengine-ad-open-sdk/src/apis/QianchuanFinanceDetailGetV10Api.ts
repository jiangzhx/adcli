// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFinanceDetailGetV10Response } from "../models";


export interface OpenApiV10QianchuanFinanceDetailGetGetRequest {
  advertiserId: number | string;
  startDate?: string;
  endDate?: string;
  page?: number;
  pageSize?: number;
}

export class QianchuanFinanceDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFinanceDetailGetGet(request: OpenApiV10QianchuanFinanceDetailGetGetRequest): Promise<QianchuanFinanceDetailGetV10Response> {
    const response = await this.openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(request: OpenApiV10QianchuanFinanceDetailGetGetRequest): Promise<ApiResponse<QianchuanFinanceDetailGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFinanceDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFinanceDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/finance/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


