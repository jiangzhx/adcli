// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomUserGetV10ActionEvent, QianchuanTodayLiveRoomUserGetV10Dimension, QianchuanTodayLiveRoomUserGetV10FlowSource, QianchuanTodayLiveRoomUserGetV10Response } from "../models";


export class QianchuanTodayLiveRoomUserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomUserGetGet(advertiserId: number, roomId: number, actionEvent: QianchuanTodayLiveRoomUserGetV10ActionEvent, dimension: QianchuanTodayLiveRoomUserGetV10Dimension[], flowSource: QianchuanTodayLiveRoomUserGetV10FlowSource): Promise<QianchuanTodayLiveRoomUserGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomUserGetGetWithHttpInfo(advertiserId, roomId, actionEvent, dimension, flowSource);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomUserGetGetWithHttpInfo(advertiserId: number, roomId: number, actionEvent: QianchuanTodayLiveRoomUserGetV10ActionEvent, dimension: QianchuanTodayLiveRoomUserGetV10Dimension[], flowSource: QianchuanTodayLiveRoomUserGetV10FlowSource): Promise<ApiResponse<QianchuanTodayLiveRoomUserGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomUserGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomUserGetGet");
    }

    if (actionEvent == null) {
      throw new ApiException("Missing the required parameter 'actionEvent' when calling openApiV10QianchuanTodayLiveRoomUserGetGet");
    }

    if (dimension == null) {
      throw new ApiException("Missing the required parameter 'dimension' when calling openApiV10QianchuanTodayLiveRoomUserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomUserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/user/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "room_id", value: roomId },
        { name: "action_event", value: actionEvent },
        { name: "flow_source", value: flowSource },
        { name: "dimension", value: dimension, collectionFormat: "csv" }
      ]
    });
  }
}


