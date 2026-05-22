// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundTransactionGetV2Response, AdvertiserFundTransactionGetV2TransactionType } from "../models";


export interface OpenApi2AdvertiserFundTransactionGetGetRequest {
  advertiserId: number | string;
  startDate: string;
  endDate: string;
  transactionType: AdvertiserFundTransactionGetV2TransactionType;
  page?: number;
  pageSize?: number;
}

export class AdvertiserFundTransactionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundTransactionGetGet(request: OpenApi2AdvertiserFundTransactionGetGetRequest): Promise<AdvertiserFundTransactionGetV2Response> {
    const response = await this.openApi2AdvertiserFundTransactionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundTransactionGetGetWithHttpInfo(request: OpenApi2AdvertiserFundTransactionGetGetRequest): Promise<ApiResponse<AdvertiserFundTransactionGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (request.startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (request.endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApi2AdvertiserFundTransactionGetGet");
    }

    if (request.transactionType == null) {
      throw new ApiException("Missing the required parameter 'transactionType' when calling openApi2AdvertiserFundTransactionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundTransactionGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/transaction/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "transaction_type", value: request.transactionType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


