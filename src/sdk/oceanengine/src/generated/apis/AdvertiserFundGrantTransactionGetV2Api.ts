// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserFundGrantTransactionGetV2Response } from "../models";


export class AdvertiserFundGrantTransactionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundGrantTransactionGetGet(advertiserId: number, startTime: string, endTime: string, page: string, pageSize: string, transactionType: string): Promise<AdvertiserFundGrantTransactionGetV2Response> {
    const response = await this.openApi2AdvertiserFundGrantTransactionGetGetWithHttpInfo(advertiserId, startTime, endTime, page, pageSize, transactionType);
    return response.data;
  }

  async openApi2AdvertiserFundGrantTransactionGetGetWithHttpInfo(advertiserId: number, startTime: string, endTime: string, page: string, pageSize: string, transactionType: string): Promise<ApiResponse<AdvertiserFundGrantTransactionGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundGrantTransactionGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/grant_transaction/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "transaction_type", value: transactionType }
      ]
    });
  }
}


