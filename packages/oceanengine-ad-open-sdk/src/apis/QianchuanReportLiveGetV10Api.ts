// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanReportLiveGetV10Response, QianchuanReportLiveGetV10StatsAuthority } from "../models";


export interface OpenApiV10QianchuanReportLiveGetGetRequest {
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

  async openApiV10QianchuanReportLiveGetGet(request: OpenApiV10QianchuanReportLiveGetGetRequest): Promise<QianchuanReportLiveGetV10Response> {
    const response = await this.openApiV10QianchuanReportLiveGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportLiveGetGetWithHttpInfo(request: OpenApiV10QianchuanReportLiveGetGetRequest): Promise<ApiResponse<QianchuanReportLiveGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportLiveGetGet");
    }

    if (request.fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanReportLiveGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportLiveGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/live/get/",
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


