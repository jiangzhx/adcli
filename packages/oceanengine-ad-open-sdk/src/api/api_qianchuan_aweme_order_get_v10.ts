// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderGetV10Count, QianchuanAwemeOrderGetV10Filtering, QianchuanAwemeOrderGetV10OrderField, QianchuanAwemeOrderGetV10Response } from "../models/index";


export interface QianchuanAwemeOrderGetV10ApiOpenApiV10QianchuanAwemeOrderGetGetRequest {
  advertiserId: number | string;
  filtering: QianchuanAwemeOrderGetV10Filtering;
  cursor?: number;
  count?: QianchuanAwemeOrderGetV10Count;
  orderField?: QianchuanAwemeOrderGetV10OrderField;
  orderCreateStartDate?: string;
  orderCreateEndDate?: string;
}

export class QianchuanAwemeOrderGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderGetGet(request: QianchuanAwemeOrderGetV10ApiOpenApiV10QianchuanAwemeOrderGetGetRequest): Promise<QianchuanAwemeOrderGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderGetGetWithHttpInfo(request: QianchuanAwemeOrderGetV10ApiOpenApiV10QianchuanAwemeOrderGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.filtering == null) {
      throw new ApiException("filtering is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count },
        { name: "order_field", value: request.orderField },
        { name: "order_create_start_date", value: request.orderCreateStartDate },
        { name: "order_create_end_date", value: request.orderCreateEndDate }
      ]
    });
  }
}


