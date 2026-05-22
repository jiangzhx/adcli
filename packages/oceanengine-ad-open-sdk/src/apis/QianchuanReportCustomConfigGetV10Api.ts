// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportCustomConfigGetV10DataTopics, QianchuanReportCustomConfigGetV10Response } from "../models";


export interface OpenApiV10QianchuanReportCustomConfigGetGetRequest {
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

  async openApiV10QianchuanReportCustomConfigGetGet(request: OpenApiV10QianchuanReportCustomConfigGetGetRequest): Promise<QianchuanReportCustomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportCustomConfigGetGetWithHttpInfo(request: OpenApiV10QianchuanReportCustomConfigGetGetRequest): Promise<ApiResponse<QianchuanReportCustomConfigGetV10Response>> {
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


