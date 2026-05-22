// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CgTransferWalletTransferCanTransferBalanceV30AccountType, CgTransferWalletTransferCanTransferBalanceV30Response, CgTransferWalletTransferCanTransferBalanceV30TransferDirection } from "../models";


export interface OpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest {
  accountId: number;
  accountType: CgTransferWalletTransferCanTransferBalanceV30AccountType;
  bizRequestNo: string;
  mainWalletId: number;
  subWalletList: number[];
  transferDirection: CgTransferWalletTransferCanTransferBalanceV30TransferDirection;
}

export class CgTransferWalletTransferCanTransferBalanceV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30CgTransferWalletTransferCanTransferBalanceGet(request: OpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest): Promise<CgTransferWalletTransferCanTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(request: OpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest): Promise<ApiResponse<CgTransferWalletTransferCanTransferBalanceV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("Missing the required parameter 'bizRequestNo' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (request.mainWalletId == null) {
      throw new ApiException("Missing the required parameter 'mainWalletId' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (request.subWalletList == null) {
      throw new ApiException("Missing the required parameter 'subWalletList' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }

    if (request.transferDirection == null) {
      throw new ApiException("Missing the required parameter 'transferDirection' when calling openApiV30CgTransferWalletTransferCanTransferBalanceGet");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferCanTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "main_wallet_id", value: request.mainWalletId },
        { name: "sub_wallet_list", value: request.subWalletList, collectionFormat: "csv" },
        { name: "transfer_direction", value: request.transferDirection }
      ]
    });
  }
}


