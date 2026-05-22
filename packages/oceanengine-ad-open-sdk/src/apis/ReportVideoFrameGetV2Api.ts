// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportVideoFrameGetV2Filtering, ReportVideoFrameGetV2Metrics, ReportVideoFrameGetV2Response } from "../models";


export class ReportVideoFrameGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportVideoFrameGetGet(advertiserId: number, endDate: string, filtering: ReportVideoFrameGetV2Filtering, metrics: ReportVideoFrameGetV2Metrics[], startDate: string): Promise<ReportVideoFrameGetV2Response> {
    const response = await this.openApi2ReportVideoFrameGetGetWithHttpInfo(advertiserId, endDate, filtering, metrics, startDate);
    return response.data;
  }

  async openApi2ReportVideoFrameGetGetWithHttpInfo(advertiserId: number, endDate: string, filtering: ReportVideoFrameGetV2Filtering, metrics: ReportVideoFrameGetV2Metrics[], startDate: string): Promise<ApiResponse<ReportVideoFrameGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportVideoFrameGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/video/frame/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_date", value: endDate },
        { name: "filtering", value: filtering },
        { name: "start_date", value: startDate },
        { name: "metrics", value: metrics, collectionFormat: "multi" }
      ]
    });
  }
}


