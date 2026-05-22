// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanFinanceDetailGetV10Response } from "../models";


export class QianchuanFinanceDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFinanceDetailGetGet(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<QianchuanFinanceDetailGetV10Response> {
    const response = await this.openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(advertiserId, startDate, endDate, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, page: number, pageSize: number): Promise<ApiResponse<QianchuanFinanceDetailGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFinanceDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFinanceDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/finance/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


