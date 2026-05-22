// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource, QianchuanTodayLiveRoomFlowPerformanceGetV10Response } from "../models";


export interface OpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest {
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

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet(request: OpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest): Promise<QianchuanTodayLiveRoomFlowPerformanceGetV10Response> {
    const response = await this.openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetWithHttpInfo(request: OpenApiV10QianchuanTodayLiveRoomFlowPerformanceGetGetRequest): Promise<ApiResponse<QianchuanTodayLiveRoomFlowPerformanceGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet");
    }

    if (request.roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanTodayLiveRoomFlowPerformanceGetGet");
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


