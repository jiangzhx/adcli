// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_qianchuan_report_today_live_room_config_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics, QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response } from "../models/index";


export interface QianchuanQianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetRequest {
  advertiserId: number | string;
  dataTopics: QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics[];
}

export class QianchuanQianchuanReportTodayLiveRoomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet(request: QianchuanQianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetRequest): Promise<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(request: QianchuanQianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetRequest): Promise<ApiResponse<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet");
    }

    if (request.dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics }
      ]
    });
  }
}


