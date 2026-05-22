// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_today_live_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportTodayLiveGetV10Response, QianchuanReportTodayLiveGetV10StatsAuthority } from "../models/index";


export interface QianchuanReportTodayLiveGetV10ApiOpenApiV10QianchuanReportTodayLiveGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  startTime: string;
  endTime: string;
  fields: string[];
  statsAuthority?: QianchuanReportTodayLiveGetV10StatsAuthority;
}

export class QianchuanReportTodayLiveGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportTodayLiveGetGet(request: QianchuanReportTodayLiveGetV10ApiOpenApiV10QianchuanReportTodayLiveGetGetRequest): Promise<QianchuanReportTodayLiveGetV10Response> {
    const response = await this.openApiV10QianchuanReportTodayLiveGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportTodayLiveGetGetWithHttpInfo(request: QianchuanReportTodayLiveGetV10ApiOpenApiV10QianchuanReportTodayLiveGetGetRequest): Promise<ApiResponse<QianchuanReportTodayLiveGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportTodayLiveGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanReportTodayLiveGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportTodayLiveGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportTodayLiveGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportTodayLiveGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportTodayLiveGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/today_live/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "stats_authority", value: request.statsAuthority }
      ]
    });
  }
}


