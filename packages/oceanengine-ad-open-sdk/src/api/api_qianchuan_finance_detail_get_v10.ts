// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_finance_detail_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFinanceDetailGetV10Response } from "../models/index";


export interface QianchuanFinanceDetailGetV10ApiOpenApiV10QianchuanFinanceDetailGetGetRequest {
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

  async openApiV10QianchuanFinanceDetailGetGet(request: QianchuanFinanceDetailGetV10ApiOpenApiV10QianchuanFinanceDetailGetGetRequest): Promise<QianchuanFinanceDetailGetV10Response> {
    const response = await this.openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFinanceDetailGetGetWithHttpInfo(request: QianchuanFinanceDetailGetV10ApiOpenApiV10QianchuanFinanceDetailGetGetRequest): Promise<ApiResponse<QianchuanFinanceDetailGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
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


