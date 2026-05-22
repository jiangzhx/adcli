// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanLqAdGetV10Filtering, QianchuanLqAdGetV10Response } from "../models";


export class QianchuanLqAdGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanLqAdGetGet(advertiserId: number, filtering: QianchuanLqAdGetV10Filtering): Promise<QianchuanLqAdGetV10Response> {
    const response = await this.openApiV10QianchuanLqAdGetGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV10QianchuanLqAdGetGetWithHttpInfo(advertiserId: number, filtering: QianchuanLqAdGetV10Filtering): Promise<ApiResponse<QianchuanLqAdGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanLqAdGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanLqAdGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/lq_ad/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


