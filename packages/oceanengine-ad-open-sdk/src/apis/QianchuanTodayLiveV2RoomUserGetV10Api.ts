// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveV2RoomUserGetV10ActionEvent, QianchuanTodayLiveV2RoomUserGetV10Dimension, QianchuanTodayLiveV2RoomUserGetV10FlowSource, QianchuanTodayLiveV2RoomUserGetV10Response } from "../models";


export class QianchuanTodayLiveV2RoomUserGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveV2RoomUserGetGet(advertiserId: number, roomId: number, actionEvent: QianchuanTodayLiveV2RoomUserGetV10ActionEvent, dimension: QianchuanTodayLiveV2RoomUserGetV10Dimension[], flowSource: QianchuanTodayLiveV2RoomUserGetV10FlowSource): Promise<QianchuanTodayLiveV2RoomUserGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(advertiserId, roomId, actionEvent, dimension, flowSource);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(advertiserId: number, roomId: number, actionEvent: QianchuanTodayLiveV2RoomUserGetV10ActionEvent, dimension: QianchuanTodayLiveV2RoomUserGetV10Dimension[], flowSource: QianchuanTodayLiveV2RoomUserGetV10FlowSource): Promise<ApiResponse<QianchuanTodayLiveV2RoomUserGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (actionEvent == null) {
      throw new ApiException("Missing the required parameter 'actionEvent' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (dimension == null) {
      throw new ApiException("Missing the required parameter 'dimension' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }

    if (flowSource == null) {
      throw new ApiException("Missing the required parameter 'flowSource' when calling openApiV10QianchuanTodayLiveV2RoomUserGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveV2RoomUserGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live_v2/room/user/get/",
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


