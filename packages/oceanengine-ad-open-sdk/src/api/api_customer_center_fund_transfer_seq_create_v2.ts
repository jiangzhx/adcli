// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_fund_transfer_seq_create_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterFundTransferSeqCreateV2Request, CustomerCenterFundTransferSeqCreateV2Response } from "../models/index";


export interface CustomerCenterFundTransferSeqCreateV2ApiOpenApi2CustomerCenterFundTransferSeqCreatePostRequest {
  customerCenterFundTransferSeqCreateV2Request?: CustomerCenterFundTransferSeqCreateV2Request;
}

export class CustomerCenterFundTransferSeqCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterFundTransferSeqCreatePost(request: CustomerCenterFundTransferSeqCreateV2ApiOpenApi2CustomerCenterFundTransferSeqCreatePostRequest): Promise<CustomerCenterFundTransferSeqCreateV2Response> {
    const response = await this.openApi2CustomerCenterFundTransferSeqCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterFundTransferSeqCreatePostWithHttpInfo(request: CustomerCenterFundTransferSeqCreateV2ApiOpenApi2CustomerCenterFundTransferSeqCreatePostRequest): Promise<ApiResponse<CustomerCenterFundTransferSeqCreateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterFundTransferSeqCreateV2Response>({
      method: "POST",
      path: "/open_api/2/customer_center/fund/transfer_seq/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.customerCenterFundTransferSeqCreateV2Request
    });
  }
}


