// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAwemeSuggestBidV10Audience, QianchuanAwemeSuggestBidV10DeliverySetting, QianchuanAwemeSuggestBidV10Response } from "../models";


export interface OpenApiV10QianchuanAwemeSuggestBidGetRequest {
  advertiserId: number | string;
  deliverySetting: QianchuanAwemeSuggestBidV10DeliverySetting;
  audience?: QianchuanAwemeSuggestBidV10Audience;
}

export class QianchuanAwemeSuggestBidV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeSuggestBidGet(request: OpenApiV10QianchuanAwemeSuggestBidGetRequest): Promise<QianchuanAwemeSuggestBidV10Response> {
    const response = await this.openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(request: OpenApiV10QianchuanAwemeSuggestBidGetRequest): Promise<ApiResponse<QianchuanAwemeSuggestBidV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeSuggestBidGet");
    }

    if (request.deliverySetting == null) {
      throw new ApiException("Missing the required parameter 'deliverySetting' when calling openApiV10QianchuanAwemeSuggestBidGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeSuggestBidV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "delivery_setting", value: request.deliverySetting },
        { name: "audience", value: request.audience }
      ]
    });
  }
}


