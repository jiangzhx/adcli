// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanReportUniPromotionDataGetV10DataTopic, QianchuanReportUniPromotionDataGetV10FiltersInner, QianchuanReportUniPromotionDataGetV10OrderByInner, QianchuanReportUniPromotionDataGetV10PageSize, QianchuanReportUniPromotionDataGetV10Response } from "../models";


export class QianchuanReportUniPromotionDataGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanReportUniPromotionDataGetGet(advertiserId: number, dataTopic: QianchuanReportUniPromotionDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportUniPromotionDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportUniPromotionDataGetV10OrderByInner[], page: number, pageSize: QianchuanReportUniPromotionDataGetV10PageSize): Promise<QianchuanReportUniPromotionDataGetV10Response> {
    const response = await this.openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(advertiserId, dataTopic, dimensions, metrics, filters, startTime, endTime, orderBy, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanReportUniPromotionDataGetGetWithHttpInfo(advertiserId: number, dataTopic: QianchuanReportUniPromotionDataGetV10DataTopic, dimensions: string[], metrics: string[], filters: QianchuanReportUniPromotionDataGetV10FiltersInner[], startTime: string, endTime: string, orderBy: QianchuanReportUniPromotionDataGetV10OrderByInner[], page: number, pageSize: QianchuanReportUniPromotionDataGetV10PageSize): Promise<ApiResponse<QianchuanReportUniPromotionDataGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (dataTopic == null) {
      throw new ApiException("Missing the required parameter 'dataTopic' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (dimensions == null) {
      throw new ApiException("Missing the required parameter 'dimensions' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (metrics == null) {
      throw new ApiException("Missing the required parameter 'metrics' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (filters == null) {
      throw new ApiException("Missing the required parameter 'filters' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }

    if (orderBy == null) {
      throw new ApiException("Missing the required parameter 'orderBy' when calling openApiV10QianchuanReportUniPromotionDataGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanReportUniPromotionDataGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/report/uni_promotion/data/get/",
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


