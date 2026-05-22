// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_ad_reject_reason_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAdRejectReasonV10Response } from "../models/index";


export interface QianchuanAdRejectReasonV10ApiOpenApiV10QianchuanAdRejectReasonGetRequest {
  adIds?: (number | string)[];
  advertiserId?: number | string;
}

export class QianchuanAdRejectReasonV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAdRejectReasonGet(request: QianchuanAdRejectReasonV10ApiOpenApiV10QianchuanAdRejectReasonGetRequest): Promise<QianchuanAdRejectReasonV10Response> {
    const response = await this.openApiV10QianchuanAdRejectReasonGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRejectReasonGetWithHttpInfo(request: QianchuanAdRejectReasonV10ApiOpenApiV10QianchuanAdRejectReasonGetRequest): Promise<ApiResponse<QianchuanAdRejectReasonV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdRejectReasonV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/reject_reason/",
      queryParams: [
        { name: "ad_ids", value: request.adIds },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


