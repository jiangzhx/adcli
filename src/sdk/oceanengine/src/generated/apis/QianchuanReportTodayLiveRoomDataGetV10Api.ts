// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportTodayLiveRoomDataGetV10DataTopic, QianchuanReportTodayLiveRoomDataGetV10FiltersInner, QianchuanReportTodayLiveRoomDataGetV10OrderByInner, QianchuanReportTodayLiveRoomDataGetV10Response } from "../models";


export class QianchuanReportTodayLiveRoomDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportTodayLiveRoomDataGetGet(advertiserId: number, dataTopic: QianchuanReportTodayLiveRoomDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportTodayLiveRoomDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportTodayLiveRoomDataGetV10OrderByInner[], page: number, pageSize: number): Promise<QianchuanReportTodayLiveRoomDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportTodayLiveRoomDataGetGetWithHttpInfo(advertiserId, dataTopic, dimensions, metrics, filters, startTime, endTime, orderBy, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportTodayLiveRoomDataGetGetWithHttpInfo(advertiserId: number, dataTopic: QianchuanReportTodayLiveRoomDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportTodayLiveRoomDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportTodayLiveRoomDataGetV10OrderByInner[], page: number, pageSize: number): Promise<ApiResponse<QianchuanReportTodayLiveRoomDataGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }

    if (orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportTodayLiveRoomDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportTodayLiveRoomDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/today_live/room/data/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_topic", value: dataTopic },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "dimensions", value: dimensions, collectionFormat: "csv" },
        { name: "metrics", value: metrics, collectionFormat: "csv" },
        { name: "filters", value: filters, collectionFormat: "multi" },
        { name: "order_by", value: orderBy, collectionFormat: "multi" }
      ]
    });
  }
}


