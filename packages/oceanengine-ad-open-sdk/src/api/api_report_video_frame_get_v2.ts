// Generated from oceanengine/ad_open_sdk_go api/api_report_video_frame_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportVideoFrameGetV2Filtering, ReportVideoFrameGetV2Metrics, ReportVideoFrameGetV2Response } from "../models/index";


export interface ReportVideoFrameGetV2ApiOpenApi2ReportVideoFrameGetGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  filtering?: ReportVideoFrameGetV2Filtering;
  metrics?: ReportVideoFrameGetV2Metrics[];
  startDate?: string;
}

export class ReportVideoFrameGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportVideoFrameGetGet(request: ReportVideoFrameGetV2ApiOpenApi2ReportVideoFrameGetGetRequest): Promise<ReportVideoFrameGetV2Response> {
    const response = await this.openApi2ReportVideoFrameGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportVideoFrameGetGetWithHttpInfo(request: ReportVideoFrameGetV2ApiOpenApi2ReportVideoFrameGetGetRequest): Promise<ApiResponse<ReportVideoFrameGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportVideoFrameGetV2Response>({
      method: "GET",
      path: "/open_api/2/report/video/frame/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "filtering", value: request.filtering },
        { name: "metrics", value: request.metrics },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


