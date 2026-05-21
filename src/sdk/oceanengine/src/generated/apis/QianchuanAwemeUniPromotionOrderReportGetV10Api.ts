// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeUniPromotionOrderReportGetV10Filter, QianchuanAwemeUniPromotionOrderReportGetV10OrderField, QianchuanAwemeUniPromotionOrderReportGetV10OrderType, QianchuanAwemeUniPromotionOrderReportGetV10PageSize, QianchuanAwemeUniPromotionOrderReportGetV10Response, QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity } from "../models";


export class QianchuanAwemeUniPromotionOrderReportGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderReportGetGet(advertiserId: number, startDate: string, endDate: string, timeGranularity: QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity, filter: QianchuanAwemeUniPromotionOrderReportGetV10Filter, orderType: QianchuanAwemeUniPromotionOrderReportGetV10OrderType, orderField: QianchuanAwemeUniPromotionOrderReportGetV10OrderField, page: number, pageSize: QianchuanAwemeUniPromotionOrderReportGetV10PageSize): Promise<QianchuanAwemeUniPromotionOrderReportGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderReportGetGetWithHttpInfo(advertiserId, startDate, endDate, timeGranularity, filter, orderType, orderField, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderReportGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, timeGranularity: QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity, filter: QianchuanAwemeUniPromotionOrderReportGetV10Filter, orderType: QianchuanAwemeUniPromotionOrderReportGetV10OrderType, orderField: QianchuanAwemeUniPromotionOrderReportGetV10OrderField, page: number, pageSize: QianchuanAwemeUniPromotionOrderReportGetV10PageSize): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderReportGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderReportGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "time_granularity", value: timeGranularity },
        { name: "filter", value: filter },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


