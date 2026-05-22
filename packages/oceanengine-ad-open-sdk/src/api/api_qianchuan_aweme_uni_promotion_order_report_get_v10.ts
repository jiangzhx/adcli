// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_uni_promotion_order_report_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeUniPromotionOrderReportGetV10Filter, QianchuanAwemeUniPromotionOrderReportGetV10OrderField, QianchuanAwemeUniPromotionOrderReportGetV10OrderType, QianchuanAwemeUniPromotionOrderReportGetV10PageSize, QianchuanAwemeUniPromotionOrderReportGetV10Response, QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity } from "../models/index";


export interface QianchuanAwemeUniPromotionOrderReportGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderReportGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  timeGranularity?: QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity;
  filter?: QianchuanAwemeUniPromotionOrderReportGetV10Filter;
  orderType?: QianchuanAwemeUniPromotionOrderReportGetV10OrderType;
  orderField?: QianchuanAwemeUniPromotionOrderReportGetV10OrderField;
  page?: number;
  pageSize?: QianchuanAwemeUniPromotionOrderReportGetV10PageSize;
}

export class QianchuanAwemeUniPromotionOrderReportGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderReportGetGet(request: QianchuanAwemeUniPromotionOrderReportGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderReportGetGetRequest): Promise<QianchuanAwemeUniPromotionOrderReportGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeUniPromotionOrderReportGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeUniPromotionOrderReportGetGetWithHttpInfo(request: QianchuanAwemeUniPromotionOrderReportGetV10ApiOpenApiV10QianchuanAwemeUniPromotionOrderReportGetGetRequest): Promise<ApiResponse<QianchuanAwemeUniPromotionOrderReportGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeUniPromotionOrderReportGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeUniPromotionOrderReportGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "time_granularity", value: request.timeGranularity },
        { name: "filter", value: request.filter },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


