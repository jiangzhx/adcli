// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_custom_config_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportCustomConfigGetV10DataTopics, QianchuanReportCustomConfigGetV10Response } from "../models/index";


export interface QianchuanReportCustomConfigGetV10ApiOpenApiV10QianchuanReportCustomConfigGetGetRequest {
  advertiserId: number | string;
  dataTopics: QianchuanReportCustomConfigGetV10DataTopics[];
}

export class QianchuanReportCustomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportCustomConfigGetGet(request: QianchuanReportCustomConfigGetV10ApiOpenApiV10QianchuanReportCustomConfigGetGetRequest): Promise<QianchuanReportCustomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(request: QianchuanReportCustomConfigGetV10ApiOpenApiV10QianchuanReportCustomConfigGetGetRequest): Promise<ApiResponse<QianchuanReportCustomConfigGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportCustomConfigGetGet");
    }

    if (request.dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportCustomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportCustomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/custom/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


