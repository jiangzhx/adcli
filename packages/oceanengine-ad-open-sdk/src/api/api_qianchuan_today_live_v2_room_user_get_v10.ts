// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_today_live_v2_room_user_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanTodayLiveV2RoomUserGetV10ActionEvent, QianchuanTodayLiveV2RoomUserGetV10Dimension, QianchuanTodayLiveV2RoomUserGetV10FlowSource, QianchuanTodayLiveV2RoomUserGetV10Response } from "../models/index";


export interface QianchuanTodayLiveV2RoomUserGetV10ApiOpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
  actionEvent: QianchuanTodayLiveV2RoomUserGetV10ActionEvent;
  dimension: QianchuanTodayLiveV2RoomUserGetV10Dimension[];
  flowSource: QianchuanTodayLiveV2RoomUserGetV10FlowSource;
}

export class QianchuanTodayLiveV2RoomUserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveV2RoomUserGetGet(request: QianchuanTodayLiveV2RoomUserGetV10ApiOpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest): Promise<QianchuanTodayLiveV2RoomUserGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(request: QianchuanTodayLiveV2RoomUserGetV10ApiOpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveV2RoomUserGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (request.roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (request.actionEvent == null) {
      throw new ApiException("Missing the required parameter 'actionEvent' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (request.dimension == null) {
      throw new ApiException("Missing the required parameter 'dimension' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (request.flowSource == null) {
      throw new ApiException("Missing the required parameter 'flowSource' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveV2RoomUserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live_v2/room/user/get/",
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


