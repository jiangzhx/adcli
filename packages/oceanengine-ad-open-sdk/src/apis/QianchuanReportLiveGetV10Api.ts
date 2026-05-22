// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportLiveGetV10Response, QianchuanReportLiveGetV10StatsAuthority } from "../models";


export class QianchuanReportLiveGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLiveGetGet(advertiserId: number, awemeId: number, startTime: string, endTime: string, fields: string[], statsAuthority: QianchuanReportLiveGetV10StatsAuthority): Promise<QianchuanReportLiveGetV10Response> {
    const response = await this.openApiV10QianchuanReportLiveGetGetWithHttpInfo(advertiserId, awemeId, startTime, endTime, fields, statsAuthority);
    return response.data;
  }

  async openApiV10QianchuanReportLiveGetGetWithHttpInfo(advertiserId: number, awemeId: number, startTime: string, endTime: string, fields: string[], statsAuthority: QianchuanReportLiveGetV10StatsAuthority): Promise<ApiResponse<QianchuanReportLiveGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportLiveGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLiveGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/live/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "stats_authority", value: statsAuthority },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


