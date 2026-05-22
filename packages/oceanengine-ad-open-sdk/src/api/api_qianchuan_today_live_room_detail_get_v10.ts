// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_today_live_room_detail_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanTodayLiveRoomDetailGetV10Response } from "../models/index";


export interface QianchuanTodayLiveRoomDetailGetV10ApiOpenApiV10QianchuanTodayLiveRoomDetailGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
}

export class QianchuanTodayLiveRoomDetailGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomDetailGetGet(request: QianchuanTodayLiveRoomDetailGetV10ApiOpenApiV10QianchuanTodayLiveRoomDetailGetGetRequest): Promise<QianchuanTodayLiveRoomDetailGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomDetailGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomDetailGetGetWithHttpInfo(request: QianchuanTodayLiveRoomDetailGetV10ApiOpenApiV10QianchuanTodayLiveRoomDetailGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomDetailGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomDetailGetGet");
    }

    if (request.roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomDetailGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomDetailGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/detail/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "room_id", value: request.roomId }
      ]
    });
  }
}


