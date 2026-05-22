// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserFundGrantTransactionGetV2Response } from "../models";


export interface OpenApi2AdvertiserFundGrantTransactionGetGetRequest {
  advertiserId: number;
  startTime: string;
  endTime: string;
  page?: string;
  pageSize?: string;
  transactionType?: string;
}

export class AdvertiserFundGrantTransactionGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserFundGrantTransactionGetGet(request: OpenApi2AdvertiserFundGrantTransactionGetGetRequest): Promise<AdvertiserFundGrantTransactionGetV2Response> {
    const response = await this.openApi2AdvertiserFundGrantTransactionGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2AdvertiserFundGrantTransactionGetGetWithHttpInfo(request: OpenApi2AdvertiserFundGrantTransactionGetGetRequest): Promise<ApiResponse<AdvertiserFundGrantTransactionGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApi2AdvertiserFundGrantTransactionGetGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserFundGrantTransactionGetV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/fund/grant_transaction/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "transaction_type", value: request.transactionType }
      ]
    });
  }
}


