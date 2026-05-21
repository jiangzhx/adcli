// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportTodayLiveRoomConfigGetV10DataTopics, QianchuanReportTodayLiveRoomConfigGetV10Response } from "../models";


export class QianchuanReportTodayLiveRoomConfigGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportTodayLiveRoomConfigGetGet(advertiserId: number, dataTopics: QianchuanReportTodayLiveRoomConfigGetV10DataTopics[]): Promise<QianchuanReportTodayLiveRoomConfigGetV10Response> {
    const response = await this.openApiV10QianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(advertiserId, dataTopics);
    return response.data;
  }

  async openApiV10QianchuanReportTodayLiveRoomConfigGetGetWithHttpInfo(advertiserId: number, dataTopics: QianchuanReportTodayLiveRoomConfigGetV10DataTopics[]): Promise<ApiResponse<QianchuanReportTodayLiveRoomConfigGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportTodayLiveRoomConfigGetGet");
    }

    if (dataTopics == null) {
      throw new ApiException("Missing the required parameter 'dataTopics' when calling openApiV10QianchuanReportTodayLiveRoomConfigGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportTodayLiveRoomConfigGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/today_live/room/config/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topics", value: dataTopics, collectionFormat: "csv" }
      ]
    });
  }
}


