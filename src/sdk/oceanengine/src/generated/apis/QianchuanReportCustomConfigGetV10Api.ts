// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportCustomConfigGetV10DataTopics, QianchuanReportCustomConfigGetV10Response } from "../models";


export class QianchuanReportCustomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportCustomConfigGetGet(advertiserId: number, dataTopics: QianchuanReportCustomConfigGetV10DataTopics[]): Promise<QianchuanReportCustomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return response.data;
  }

  async openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(advertiserId: number, dataTopics: QianchuanReportCustomConfigGetV10DataTopics[]): Promise<ApiResponse<QianchuanReportCustomConfigGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportCustomConfigGetGet");
    }

    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportCustomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportCustomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/custom/config/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topics", value: dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


