// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserFundTransactionGetV2Response, AdvertiserFundTransactionGetV2TransactionType } from "../models";


export class AdvertiserFundTransactionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundTransactionGetGet(advertiserId: number, startDate: string, endDate: string, transactionType: AdvertiserFundTransactionGetV2TransactionType, page: number, pageSize: number): Promise<AdvertiserFundTransactionGetV2Response> {
    const response = await this.openApi2AdvertiserFundTransactionGetGetWithHttpInfo(advertiserId, startDate, endDate, transactionType, page, pageSize);
    return response.data;
  }

  async openApi2AdvertiserFundTransactionGetGetWithHttpInfo(advertiserId: number, startDate: string, endDate: string, transactionType: AdvertiserFundTransactionGetV2TransactionType, page: number, pageSize: number): Promise<ApiResponse<AdvertiserFundTransactionGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (transactionType == null) {
      throw new ApiException("Missing the required parameter 'transactionType' when calling openApi2AdvertiserFundTransactionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundTransactionGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/transaction/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "transaction_type", value: transactionType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


