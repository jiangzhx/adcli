// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdCompensateStatusGetV10Response } from "../models";


export class QianchuanAdCompensateStatusGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdCompensateStatusGetGet(advertiserId: number, adIds: number[]): Promise<QianchuanAdCompensateStatusGetV10Response> {
    const response = await this.openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(advertiserId, adIds);
    return response.data;
  }

  async openApiV10QianchuanAdCompensateStatusGetGetWithHttpInfo(advertiserId: number, adIds: number[]): Promise<ApiResponse<QianchuanAdCompensateStatusGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAdCompensateStatusGetGet");
    }

    if (adIds == null) {
      throw new ApiException("Missing the required parameter 'adIds' when calling openApiV10QianchuanAdCompensateStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAdCompensateStatusGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/compensate_status/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "csv" }
      ]
    });
  }
}


