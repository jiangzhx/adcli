// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomerCenterFundTransferSeqCommitV2Request, CustomerCenterFundTransferSeqCommitV2Response } from "../models";


export interface OpenApi2CustomerCenterFundTransferSeqCommitPostRequest {
  customerCenterFundTransferSeqCommitV2Request?: CustomerCenterFundTransferSeqCommitV2Request;
}

export class CustomerCenterFundTransferSeqCommitV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CustomerCenterFundTransferSeqCommitPost(request: OpenApi2CustomerCenterFundTransferSeqCommitPostRequest): Promise<CustomerCenterFundTransferSeqCommitV2Response> {
    const response = await this.openApi2CustomerCenterFundTransferSeqCommitPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterFundTransferSeqCommitPostWithHttpInfo(request: OpenApi2CustomerCenterFundTransferSeqCommitPostRequest): Promise<ApiResponse<CustomerCenterFundTransferSeqCommitV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterFundTransferSeqCommitV2Response>({
      method: "POST",
      path: "/open_api/2/customer_center/fund/transfer_seq/commit/",
      queryParams: [

      ],
      body: request.customerCenterFundTransferSeqCommitV2Request
    });
  }
}


