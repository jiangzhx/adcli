// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_today_live_room_data_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportTodayLiveRoomDataGetV10DataTopic, QianchuanReportTodayLiveRoomDataGetV10FiltersInner, QianchuanReportTodayLiveRoomDataGetV10OrderByInner, QianchuanReportTodayLiveRoomDataGetV10Response } from "../models/index";


export interface QianchuanReportTodayLiveRoomDataGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomDataGetGetRequest {
  advertiserId: number | string;
  dataTopic: QianchuanReportTodayLiveRoomDataGetV10DataTopic;
  dimensions: string[];
  metrics: string[];
  filters: QianchuanReportTodayLiveRoomDataGetV10FiltersInner[];
  startTime: string;
  endTime: string;
  orderBy: QianchuanReportTodayLiveRoomDataGetV10OrderByInner[];
  page?: number;
  pageSize?: number;
}

export class QianchuanReportTodayLiveRoomDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportTodayLiveRoomDataGetGet(request: QianchuanReportTodayLiveRoomDataGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomDataGetGetRequest): Promise<QianchuanReportTodayLiveRoomDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportTodayLiveRoomDataGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportTodayLiveRoomDataGetGetWithHttpInfo(request: QianchuanReportTodayLiveRoomDataGetV10ApiOpenApiV10QianchuanReportTodayLiveRoomDataGetGetRequest): Promise<ApiResponse<QianchuanReportTodayLiveRoomDataGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (request.orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportTodayLiveRoomDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/today_live/room/data/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_topic", value: request.dataTopic },
        { name: "dimensions", value: request.dimensions },
        { name: "metrics", value: request.metrics },
        { name: "filters", value: request.filters },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "order_by", value: request.orderBy },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


