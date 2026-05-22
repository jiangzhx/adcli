// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_report_uni_promotion_dimension_data_room_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension, QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering, QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics, QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType, QianchuanReportUniPromotionDimensionDataRoomGetV10Response } from "../models/index";


export interface QianchuanReportUniPromotionDimensionDataRoomGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetRequest {
  advertiserId: number | string;
  roomId: number | string;
  startTime?: string;
  endTime?: string;
  dimension?: QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension;
  metrics?: QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics[];
  orderField?: string;
  orderType?: QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType;
  page?: number;
  pageSize?: number;
  filtering?: QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering;
}

export class QianchuanReportUniPromotionDimensionDataRoomGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet(request: QianchuanReportUniPromotionDimensionDataRoomGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetRequest): Promise<QianchuanReportUniPromotionDimensionDataRoomGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetWithHttpInfo(request: QianchuanReportUniPromotionDimensionDataRoomGetV10ApiOpenApiV10QianchuanReportUniPromotionDimensionDataRoomGetGetRequest): Promise<ApiResponse<QianchuanReportUniPromotionDimensionDataRoomGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet");
    }

    if (request.roomId == null) {
      throw new ApiException("Missing the required parameter 'roomId' when calling openApiV10QianchuanReportUniPromotionDimensionDataRoomGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDimensionDataRoomGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "room_id", value: request.roomId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "dimension", value: request.dimension },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


