// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveV2RoomUserGetV10ActionEvent, QianchuanTodayLiveV2RoomUserGetV10Dimension, QianchuanTodayLiveV2RoomUserGetV10FlowSource, QianchuanTodayLiveV2RoomUserGetV10Response } from "../models";


export interface OpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest {
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

  async openApiV10QianchuanTodayLiveV2RoomUserGetGet(request: OpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest): Promise<QianchuanTodayLiveV2RoomUserGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveV2RoomUserGetGetWithHttpInfo(request: OpenApiV10QianchuanTodayLiveV2RoomUserGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveV2RoomUserGetV10Response>> {
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
        { name: "dimension", value: request.dimension, collectionFormat: "csv" },
        { name: "flow_source", value: request.flowSource }
      ]
    });
  }
}


