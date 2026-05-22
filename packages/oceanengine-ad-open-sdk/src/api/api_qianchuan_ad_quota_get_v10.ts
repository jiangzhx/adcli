// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_quota_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdQuotaGetV10Response } from "../models/index";


export interface QianchuanAdQuotaGetV10ApiOpenApiV10QianchuanAdQuotaGetGetRequest {
  advertiserId: number | string;
}

export class QianchuanAdQuotaGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdQuotaGetGet(request: QianchuanAdQuotaGetV10ApiOpenApiV10QianchuanAdQuotaGetGetRequest): Promise<QianchuanAdQuotaGetV10Response> {
    const response = await this.openApiV10QianchuanAdQuotaGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdQuotaGetGetWithHttpInfo(request: QianchuanAdQuotaGetV10ApiOpenApiV10QianchuanAdQuotaGetGetRequest): Promise<ApiResponse<QianchuanAdQuotaGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdQuotaGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdQuotaGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/quota/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


