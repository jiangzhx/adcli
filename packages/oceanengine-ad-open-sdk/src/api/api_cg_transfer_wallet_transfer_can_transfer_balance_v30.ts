// Generated from oceanengine/ad_open_sdk_go api/api_cg_transfer_wallet_transfer_can_transfer_balance_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CgTransferWalletTransferCanTransferBalanceV30AccountType, CgTransferWalletTransferCanTransferBalanceV30Response, CgTransferWalletTransferCanTransferBalanceV30TransferDirection } from "../models/index";


export interface CgTransferWalletTransferCanTransferBalanceV30ApiOpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest {
  accountId: number | string;
  accountType: CgTransferWalletTransferCanTransferBalanceV30AccountType;
  bizRequestNo: string;
  mainWalletId: number | string;
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

  async openApiV30CgTransferWalletTransferCanTransferBalanceGet(request: CgTransferWalletTransferCanTransferBalanceV30ApiOpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest): Promise<CgTransferWalletTransferCanTransferBalanceV30Response> {
    const response = await this.openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30CgTransferWalletTransferCanTransferBalanceGetWithHttpInfo(request: CgTransferWalletTransferCanTransferBalanceV30ApiOpenApiV30CgTransferWalletTransferCanTransferBalanceGetRequest): Promise<ApiResponse<CgTransferWalletTransferCanTransferBalanceV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.bizRequestNo == null) {
      throw new ApiException("bizRequestNo is required and must be specified");
    }

    if (request.mainWalletId == null) {
      throw new ApiException("mainWalletId is required and must be specified");
    }

    if (request.subWalletList == null) {
      throw new ApiException("subWalletList is required and must be specified");
    }

    if (request.transferDirection == null) {
      throw new ApiException("transferDirection is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<CgTransferWalletTransferCanTransferBalanceV30Response>({
      method: "GET",
      path: "/open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "biz_request_no", value: request.bizRequestNo },
        { name: "main_wallet_id", value: request.mainWalletId },
        { name: "sub_wallet_list", value: request.subWalletList },
        { name: "transfer_direction", value: request.transferDirection }
      ]
    });
  }
}


