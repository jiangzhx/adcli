// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAwemeSuggestBidV10Audience, QianchuanAwemeSuggestBidV10DeliverySetting, QianchuanAwemeSuggestBidV10Response } from "../models";


export class QianchuanAwemeSuggestBidV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAwemeSuggestBidGet(advertiserId: number, deliverySetting: QianchuanAwemeSuggestBidV10DeliverySetting, audience: QianchuanAwemeSuggestBidV10Audience): Promise<QianchuanAwemeSuggestBidV10Response> {
    const response = await this.openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(advertiserId, deliverySetting, audience);
    return response.data;
  }

  async openApiV10QianchuanAwemeSuggestBidGetWithHttpInfo(advertiserId: number, deliverySetting: QianchuanAwemeSuggestBidV10DeliverySetting, audience: QianchuanAwemeSuggestBidV10Audience): Promise<ApiResponse<QianchuanAwemeSuggestBidV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAwemeSuggestBidGet");
    }

    if (deliverySetting == null) {
      throw new ApiException("Missing the required parameter 'deliverySetting' when calling openApiV10QianchuanAwemeSuggestBidGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAwemeSuggestBidV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/aweme/suggest_bid/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "delivery_setting", value: deliverySetting },
        { name: "audience", value: audience }
      ]
    });
  }
}


