// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_aweme_suggest_bid_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAwemeSuggestBidV10Audience, QianchuanAwemeSuggestBidV10DeliverySetting, QianchuanAwemeSuggestBidV10Response } from "../models/index";


export interface QianchuanAwemeSuggestBidV10ApiOpenApiV10QianchuanAwemeSuggestBidGetRequest {
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

  async openApiV10QianchuanAwemeSuggestBidGet(request: QianchuanAwemeSuggestBidV10ApiOpenApiV10QianchuanAwemeSuggestBidGetRequest): Promise<QianchuanAwemeSuggestBidV10Response> {
    const response = await this.openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(request: QianchuanAwemeSuggestBidV10ApiOpenApiV10QianchuanAwemeSuggestBidGetRequest): Promise<ApiResponse<QianchuanAwemeSuggestBidV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.deliverySetting == null) {
      throw new ApiException("deliverySetting is required and must be specified");
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


