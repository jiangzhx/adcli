// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomDetailGetV10Response } from "../models";


export class QianchuanTodayLiveRoomDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomDetailGetGet(advertiserId: number, roomId: number): Promise<QianchuanTodayLiveRoomDetailGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomDetailGetGetWithHttpInfo(advertiserId, roomId);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomDetailGetGetWithHttpInfo(advertiserId: number, roomId: number): Promise<ApiResponse<QianchuanTodayLiveRoomDetailGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomDetailGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "room_id", value: roomId }
      ]
    });
  }
}


