// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_live_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportLiveGetV10Response, QianchuanReportLiveGetV10StatsAuthority } from "../models/index";


export interface QianchuanReportLiveGetV10ApiOpenApiV10QianchuanReportLiveGetGetRequest {
  advertiserId: number | string;
  awemeId: number | string;
  startTime: string;
  endTime: string;
  fields: string[];
  statsAuthority?: QianchuanReportLiveGetV10StatsAuthority;
}

export class QianchuanReportLiveGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportLiveGetGet(request: QianchuanReportLiveGetV10ApiOpenApiV10QianchuanReportLiveGetGetRequest): Promise<QianchuanReportLiveGetV10Response> {
    const response = await this.openApiV10QianchuanReportLiveGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLiveGetGetWithHttpInfo(request: QianchuanReportLiveGetV10ApiOpenApiV10QianchuanReportLiveGetGetRequest): Promise<ApiResponse<QianchuanReportLiveGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }

    if (request.fields == null) {
      throw new ApiException("fields is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLiveGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/live/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "aweme_id", value: request.awemeId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "fields", value: request.fields },
        { name: "stats_authority", value: request.statsAuthority }
      ]
    });
  }
}


