// Generated from oceanengine/ad_open_sdk_go api/api_customer_center_fund_transfer_seq_commit_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomerCenterFundTransferSeqCommitV2Request, CustomerCenterFundTransferSeqCommitV2Response } from "../models/index";


export interface CustomerCenterFundTransferSeqCommitV2ApiOpenApi2CustomerCenterFundTransferSeqCommitPostRequest {
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

  async openApi2CustomerCenterFundTransferSeqCommitPost(request: CustomerCenterFundTransferSeqCommitV2ApiOpenApi2CustomerCenterFundTransferSeqCommitPostRequest): Promise<CustomerCenterFundTransferSeqCommitV2Response> {
    const response = await this.openApi2CustomerCenterFundTransferSeqCommitPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CustomerCenterFundTransferSeqCommitPostWithHttpInfo(request: CustomerCenterFundTransferSeqCommitV2ApiOpenApi2CustomerCenterFundTransferSeqCommitPostRequest): Promise<ApiResponse<CustomerCenterFundTransferSeqCommitV2Response>> {

    return this.apiClient.requestWithHttpInfo<CustomerCenterFundTransferSeqCommitV2Response>({
      method: "POST",
      path: "/open_api/2/customer_center/fund/transfer_seq/commit/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.customerCenterFundTransferSeqCommitV2Request
    });
  }
}


