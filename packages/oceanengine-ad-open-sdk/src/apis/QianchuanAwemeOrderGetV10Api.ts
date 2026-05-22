// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeOrderGetV10Count, QianchuanAwemeOrderGetV10Filtering, QianchuanAwemeOrderGetV10OrderField, QianchuanAwemeOrderGetV10Response } from "../models";


export class QianchuanAwemeOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderGetGet(advertiserId: number, filtering: QianchuanAwemeOrderGetV10Filtering, cursor: number, count: QianchuanAwemeOrderGetV10Count, orderField: QianchuanAwemeOrderGetV10OrderField, orderCreateStartDate: string, orderCreateEndDate: string): Promise<QianchuanAwemeOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderGetGetWithHttpInfo(advertiserId, filtering, cursor, count, orderField, orderCreateStartDate, orderCreateEndDate);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanAwemeOrderGetV10Filtering, cursor: number, count: QianchuanAwemeOrderGetV10Count, orderField: QianchuanAwemeOrderGetV10OrderField, orderCreateStartDate: string, orderCreateEndDate: string): Promise<ApiResponse<QianchuanAwemeOrderGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeOrderGetGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV10QianchuanAwemeOrderGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "order_field", value: orderField },
        { name: "order_create_start_date", value: orderCreateStartDate },
        { name: "order_create_end_date", value: orderCreateEndDate }
      ]
    });
  }
}


