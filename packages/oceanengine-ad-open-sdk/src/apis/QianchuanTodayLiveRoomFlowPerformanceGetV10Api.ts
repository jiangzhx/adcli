// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource, QianchuanTodayLiveRoomFlowPerformanceGetV10Response } from "../models";


export class QianchuanTodayLiveRoomFlowPerformanceGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet(advertiserId: number, roomId: number, flowSource: QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource): Promise<QianchuanTodayLiveRoomFlowPerformanceGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(advertiserId, roomId, flowSource);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(advertiserId: number, roomId: number, flowSource: QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource): Promise<ApiResponse<QianchuanTodayLiveRoomFlowPerformanceGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomFlowPerformanceGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/flow_performance/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "room_id", value: roomId },
        { name: "flow_source", value: flowSource }
      ]
    });
  }
}


