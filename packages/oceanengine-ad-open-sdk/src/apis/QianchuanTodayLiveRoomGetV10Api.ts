// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomGetV10AdStatus, QianchuanTodayLiveRoomGetV10Response, QianchuanTodayLiveRoomGetV10RoomStatus } from "../models";


export class QianchuanTodayLiveRoomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomGetGet(advertiserId: number, awemeId: number, dateTime: string, fields: string[], roomStatus: QianchuanTodayLiveRoomGetV10RoomStatus, adStatus: QianchuanTodayLiveRoomGetV10AdStatus, page: number, pageSize: number): Promise<QianchuanTodayLiveRoomGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomGetGetWithHttpInfo(advertiserId, awemeId, dateTime, fields, roomStatus, adStatus, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomGetGetWithHttpInfo(advertiserId: number, awemeId: number, dateTime: string, fields: string[], roomStatus: QianchuanTodayLiveRoomGetV10RoomStatus, adStatus: QianchuanTodayLiveRoomGetV10AdStatus, page: number, pageSize: number): Promise<ApiResponse<QianchuanTodayLiveRoomGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (dateTime == null) {
      throw new ApiException("Missing the required parameter 'dateTime' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }

    if (fields == null) {
      throw new ApiException("Missing the required parameter 'fields' when calling openApiV10QianchuanTodayLiveRoomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "aweme_id", value: awemeId },
        { name: "date_time", value: dateTime },
        { name: "room_status", value: roomStatus },
        { name: "ad_status", value: adStatus },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


