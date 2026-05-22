// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeReportOrderGetV10Filtering, QianchuanAwemeReportOrderGetV10OrderType, QianchuanAwemeReportOrderGetV10PageSize, QianchuanAwemeReportOrderGetV10Response } from "../models";


export class QianchuanAwemeReportOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeReportOrderGetGet(advertiserId: number, startDate: string, endDate: string, filtering: QianchuanAwemeReportOrderGetV10Filtering, fields: string[], orderField: string, orderType: QianchuanAwemeReportOrderGetV10OrderType, page: number, pageSize: QianchuanAwemeReportOrderGetV10PageSize): Promise<QianchuanAwemeReportOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeReportOrderGetGetWithHttpInfo(advertiserId, startDate, endDate, filtering, fields, orderField, orderType, page, pageSize);
    return response.data;
  }

  async openApiV10QianchuanAwemeReportOrderGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, filtering: QianchuanAwemeReportOrderGetV10Filtering, fields: string[], orderField: string, orderType: QianchuanAwemeReportOrderGetV10OrderType, page: number, pageSize: QianchuanAwemeReportOrderGetV10PageSize): Promise<ApiResponse<QianchuanAwemeReportOrderGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAwemeReportOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeReportOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/report/order/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "order_field", value: orderField },
        { name: "order_type", value: orderType },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


