// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportLongTransferOrderConfigGetV10DataTopics, QianchuanReportLongTransferOrderConfigGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest {
  advertiserId: number;
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

  async openApiV10QianchuanReportLongTransferOrderConfigGetGet(request: OpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest): Promise<QianchuanReportLongTransferOrderConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportLongTransferOrderConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLongTransferOrderConfigGetGetWithHttpInfo(request: OpenApiV10QianchuanReportLongTransferOrderConfigGetGetRequest): Promise<ApiResponse<QianchuanReportLongTransferOrderConfigGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLongTransferOrderConfigGetGet");
    }

    if (request.dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportLongTransferOrderConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLongTransferOrderConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/long_transfer/order/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


