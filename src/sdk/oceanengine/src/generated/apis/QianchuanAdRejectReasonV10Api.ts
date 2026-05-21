// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAdRejectReasonV10Response } from "../models";


export class QianchuanAdRejectReasonV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRejectReasonGet(adIds: number[], advertiserId: number): Promise<QianchuanAdRejectReasonV10Response> {
    const response = await this.openApiV10QianchuanAdRejectReasonGetWithHttpInfo(adIds, advertiserId);
    return response.data;
  }

  async openApiV10QianchuanAdRejectReasonGetWithHttpInfo(adIds: number[], advertiserId: number): Promise<ApiResponse<QianchuanAdRejectReasonV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdRejectReasonV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/reject_reason/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "ad_ids", value: adIds, collectionFormat: "multi" }
      ]
    });
  }
}


