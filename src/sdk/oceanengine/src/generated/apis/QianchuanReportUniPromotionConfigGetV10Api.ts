// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportUniPromotionConfigGetV10DataTopics, QianchuanReportUniPromotionConfigGetV10Response } from "../models";


export class QianchuanReportUniPromotionConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionConfigGetGet(advertiserId: number, dataTopics: QianchuanReportUniPromotionConfigGetV10DataTopics[]): Promise<QianchuanReportUniPromotionConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionConfigGetGetWithHttpInfo(advertiserId: number, dataTopics: QianchuanReportUniPromotionConfigGetV10DataTopics[]): Promise<ApiResponse<QianchuanReportUniPromotionConfigGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionConfigGetGet");
    }

    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportUniPromotionConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/config/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topics", value: dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


