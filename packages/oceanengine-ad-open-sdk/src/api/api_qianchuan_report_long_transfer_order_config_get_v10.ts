// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_long_transfer_order_config_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportLongTransferOrderConfigGetV10DataTopics, QianchuanReportLongTransferOrderConfigGetV10Response } from "../models/index";


export interface QianchuanReportLongTransferOrderConfigGetV10ApiOpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest {
  advertiserId: number | string;
  dataTopics: QianchuanReportLongTransferOrderConfigGetV10DataTopics[];
}

export class QianchuanReportLongTransferOrderConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLongTransferOrderConfigGetGet(request: QianchuanReportLongTransferOrderConfigGetV10ApiOpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest): Promise<QianchuanReportLongTransferOrderConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderConfigGetGetWithHttpInfo(request: QianchuanReportLongTransferOrderConfigGetV10ApiOpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest): Promise<ApiResponse<QianchuanReportLongTransferOrderConfigGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.dataTopics == null) {
      throw new ApiException("dataTopics is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics }
      ]
    });
  }
}


