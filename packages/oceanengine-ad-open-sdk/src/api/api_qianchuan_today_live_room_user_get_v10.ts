// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_today_live_room_user_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanTodayLiveRoomUserGetV10ActionEvent, QianchuanTodayLiveRoomUserGetV10Dimension, QianchuanTodayLiveRoomUserGetV10FlowSource, QianchuanTodayLiveRoomUserGetV10Response } from "../models/index";


export interface QianchuanTodayLiveRoomUserGetV10ApiOpenApiV10QianchuanTodayLiveRoomUserGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
  actionEvent: QianchuanTodayLiveRoomUserGetV10ActionEvent;
  dimension: QianchuanTodayLiveRoomUserGetV10Dimension[];
  flowSource?: QianchuanTodayLiveRoomUserGetV10FlowSource;
}

export class QianchuanTodayLiveRoomUserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomUserGetGet(request: QianchuanTodayLiveRoomUserGetV10ApiOpenApiV10QianchuanTodayLiveRoomUserGetGetRequest): Promise<QianchuanTodayLiveRoomUserGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomUserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomUserGetGetWithHttpInfo(request: QianchuanTodayLiveRoomUserGetV10ApiOpenApiV10QianchuanTodayLiveRoomUserGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomUserGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.roomId == null) {
      throw new ApiException("roomId is required and must be specified");
    }

    if (request.actionEvent == null) {
      throw new ApiException("actionEvent is required and must be specified");
    }

    if (request.dimension == null) {
      throw new ApiException("dimension is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomUserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/user/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "room_id", value: request.roomId },
        { name: "action_event", value: request.actionEvent },
        { name: "dimension", value: request.dimension },
        { name: "flow_source", value: request.flowSource }
      ]
    });
  }
}


