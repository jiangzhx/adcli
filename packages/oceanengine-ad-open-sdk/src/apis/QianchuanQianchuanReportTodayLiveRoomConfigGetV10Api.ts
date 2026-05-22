// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics, QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response } from "../models";


export class QianchuanQianchuanReportTodayLiveRoomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet(advertiserId: number, dataTopics: QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics[]): Promise<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return response.data;
  }

  async openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(advertiserId: number, dataTopics: QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics[]): Promise<ApiResponse<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet");
    }

    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanQianchuanReportTodayLiveRoomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topics", value: dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


