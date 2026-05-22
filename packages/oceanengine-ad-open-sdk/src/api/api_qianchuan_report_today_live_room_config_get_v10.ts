// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_today_live_room_config_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportTodayLiveRoomConfigGetV10DataTopics, QianchuanReportTodayLiveRoomConfigGetV10Response } from "../models/index";


export interface QianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomConfigGetGetRequest {
  advertiserId: number | string;
  dataTopics: QianchuanReportTodayLiveRoomConfigGetV10DataTopics[];
}

export class QianchuanReportTodayLiveRoomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportTodayLiveRoomConfigGetGet(request: QianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomConfigGetGetRequest): Promise<QianchuanReportTodayLiveRoomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(request: QianchuanReportTodayLiveRoomConfigGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomConfigGetGetRequest): Promise<ApiResponse<QianchuanReportTodayLiveRoomConfigGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportTodayLiveRoomConfigGetGet");
    }

    if (request.dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportTodayLiveRoomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportTodayLiveRoomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/today_live/room/config/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topics", value: request.dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


