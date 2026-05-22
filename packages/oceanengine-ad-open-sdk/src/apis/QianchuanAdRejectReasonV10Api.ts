// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAdRejectReasonV10Response } from "../models";


export interface OpenApiV10QianchuanAdRejectReasonGetRequest {
  adIds?: number | string[];
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

  async openApiV10QianchuanAdRejectReasonGet(request: OpenApiV10QianchuanAdRejectReasonGetRequest): Promise<QianchuanAdRejectReasonV10Response> {
    const response = await this.openApiV10QianchuanAdRejectReasonGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAdRejectReasonGetWithHttpInfo(request: OpenApiV10QianchuanAdRejectReasonGetRequest): Promise<ApiResponse<QianchuanAdRejectReasonV10Response>> {

    return this.apiClient.requestWithHttpInfo<QianchuanAdRejectReasonV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/ad/reject_reason/",
      queryParams: [
        { name: "ad_ids", value: request.adIds, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


