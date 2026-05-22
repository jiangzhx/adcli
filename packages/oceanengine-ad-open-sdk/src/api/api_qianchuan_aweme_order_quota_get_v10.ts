// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_order_quota_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeOrderQuotaGetV10Response } from "../models/index";


export interface QianchuanAwemeOrderQuotaGetV10ApiOpenApiV10QianchuanAwemeOrderQuotaGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanAwemeOrderQuotaGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeOrderQuotaGetGet(request: QianchuanAwemeOrderQuotaGetV10ApiOpenApiV10QianchuanAwemeOrderQuotaGetGetRequest): Promise<QianchuanAwemeOrderQuotaGetV10Response> {
    const response = await this.openApiV10QianchuanAwemeOrderQuotaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeOrderQuotaGetGetWithHttpInfo(request: QianchuanAwemeOrderQuotaGetV10ApiOpenApiV10QianchuanAwemeOrderQuotaGetGetRequest): Promise<ApiResponse<QianchuanAwemeOrderQuotaGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeOrderQuotaGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/order/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


