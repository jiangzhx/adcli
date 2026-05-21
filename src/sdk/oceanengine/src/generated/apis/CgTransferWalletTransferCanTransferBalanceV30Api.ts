// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { CgTransferWalletTransferCanTransferBalanceV30AccountType, CgTransferWalletTransferCanTransferBalanceV30Response, CgTransferWalletTransferCanTransferBalanceV30TransferDirection } from "../models";


export class CgTransferWalletTransferCanTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferCanTransferBalanceGet(accountId: number, accountType: CgTransferWalletTransferCanTransferBalanceV30AccountType, bizRequestNo: string, mainWalletId: number, subWalletList: number[], transferDirection: CgTransferWalletTransferCanTransferBalanceV30TransferDirection): Promise<CgTransferWalletTransferCanTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(accountId, accountType, bizRequestNo, mainWalletId, subWalletList, transferDirection);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(accountId: number, accountType: CgTransferWalletTransferCanTransferBalanceV30AccountType, bizRequestNo: string, mainWalletId: number, subWalletList: number[], transferDirection: CgTransferWalletTransferCanTransferBalanceV30TransferDirection): Promise<ApiResponse<CgTransferWalletTransferCanTransferBalanceV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (mainWalletId == null) {
      throw new ApiException("Missing the required parameter 'mainWalletId' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (subWalletList == null) {
      throw new ApiException("Missing the required parameter 'subWalletList' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferCanTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "biz_request_no", value: bizRequestNo },
        { name: "main_wallet_id", value: mainWalletId },
        { name: "transfer_direction", value: transferDirection },
        { name: "sub_wallet_list", value: subWalletList, collectionFormat: "csv" }
      ]
    });
  }
}


