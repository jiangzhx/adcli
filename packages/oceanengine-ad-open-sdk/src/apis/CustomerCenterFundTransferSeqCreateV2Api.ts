// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomerCenterFundTransferSeqCreateV2Request, CustomerCenterFundTransferSeqCreateV2Response } from "../models";


export class CustomerCenterFundTransferSeqCreateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterFundTransferSeqCreatePost(request: CustomerCenterFundTransferSeqCreateV2Request): Promise<CustomerCenterFundTransferSeqCreateV2Response> {
    const response = await this.openApi2CustomerCenterFundTransferSeqCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterFundTransferSeqCreatePostWithHttpInfo(request: CustomerCenterFundTransferSeqCreateV2Request): Promise<ApiResponse<CustomerCenterFundTransferSeqCreateV2Response>> {
    return this.apiClient.requestWithHttpInfo<CustomerCenterFundTransferSeqCreateV2Response>({
      method: "POST",
      path: "/open_api/2/customer_center/fund/transfer_seq/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


