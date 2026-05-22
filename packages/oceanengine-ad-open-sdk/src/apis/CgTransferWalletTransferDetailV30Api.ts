// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferWalletTransferDetailV30AccountType, CgTransferWalletTransferDetailV30Response } from "../models";


export class CgTransferWalletTransferDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferDetailGet(accountId: number, accountType: CgTransferWalletTransferDetailV30AccountType, bizRequestNo: string, transferBizRequestNo: string, transferSerial: string): Promise<CgTransferWalletTransferDetailV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferDetailGetWithHttpInfo(accountId, accountType, bizRequestNo, transferBizRequestNo, transferSerial);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferDetailGetWithHttpInfo(accountId: number, accountType: CgTransferWalletTransferDetailV30AccountType, bizRequestNo: string, transferBizRequestNo: string, transferSerial: string): Promise<ApiResponse<CgTransferWalletTransferDetailV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferDetailGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferDetailGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/detail/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "transfer_biz_request_no", value: transferBizRequestNo },
        { name: "transfer_serial", value: transferSerial }
      ]
    });
  }
}


