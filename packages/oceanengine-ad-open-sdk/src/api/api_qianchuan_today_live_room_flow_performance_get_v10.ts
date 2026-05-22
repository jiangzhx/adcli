// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_today_live_room_flow_performance_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource, QianchuanTodayLiveRoomFlowPerformanceGetV10Response } from "../models/index";


export interface QianchuanTodayLiveRoomFlowPerformanceGetV10ApiOpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
  flowSource?: QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource;
}

export class QianchuanTodayLiveRoomFlowPerformanceGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet(request: QianchuanTodayLiveRoomFlowPerformanceGetV10ApiOpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest): Promise<QianchuanTodayLiveRoomFlowPerformanceGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(request: QianchuanTodayLiveRoomFlowPerformanceGetV10ApiOpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomFlowPerformanceGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.roomId == null) {
      throw new ApiException("roomId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanTodayLiveRoomFlowPerformanceGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/today_live/room/flow_performance/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "room_id", value: request.roomId },
        { name: "flow_source", value: request.flowSource }
      ]
    });
  }
}


