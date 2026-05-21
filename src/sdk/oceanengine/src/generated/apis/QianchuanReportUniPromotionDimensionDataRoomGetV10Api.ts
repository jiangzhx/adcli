// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension, QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering, QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics, QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType, QianchuanReportUniPromotionDimensionDataRoomGetV10Response } from "../models";


export class QianchuanReportUniPromotionDimensionDataRoomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet(advertiserId: number, roomId: number, startTime: string, endTime: string, dimension: QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension, metrics: QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics[], orderField: string, orderType: QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType, page: number, pageSize: number, filtering: QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering): Promise<QianchuanReportUniPromotionDimensionDataRoomGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetWithHttpInfo(advertiserId, roomId, startTime, endTime, dimension, metrics, orderField, orderType, page, pageSize, filtering);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetWithHttpInfo(advertiserId: number, roomId: number, startTime: string, endTime: string, dimension: QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension, metrics: QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics[], orderField: string, orderType: QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType, page: number, pageSize: number, filtering: QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering): Promise<ApiResponse<QianchuanReportUniPromotionDimensionDataRoomGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet");
    }

    if (roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDimensionDataRoomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "room_id", value: roomId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "dimension", value: dimension },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "filtering", value: filtering },
        { name: "metrics", value: metrics, collectionFormat: "csv" }
      ]
    });
  }
}


