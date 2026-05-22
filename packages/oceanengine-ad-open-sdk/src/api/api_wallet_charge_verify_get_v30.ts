// Generated from oceanengine/ad_open_sdk_go api/api_wallet_charge_verify_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletChargeVerifyGetV30ChargeType, WalletChargeVerifyGetV30Response } from "../models/index";


export interface WalletChargeVerifyGetV30ApiOpenApiV30WalletChargeVerifyGetGetRequest {
  accountId: number | string;
  walletId: number | string;
  chargeType: WalletChargeVerifyGetV30ChargeType;
}

export class WalletChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30WalletChargeVerifyGetGet(request: WalletChargeVerifyGetV30ApiOpenApiV30WalletChargeVerifyGetGetRequest): Promise<WalletChargeVerifyGetV30Response> {
    const response = await this.openApiV30WalletChargeVerifyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30WalletChargeVerifyGetGetWithHttpInfo(request: WalletChargeVerifyGetV30ApiOpenApiV30WalletChargeVerifyGetGetRequest): Promise<ApiResponse<WalletChargeVerifyGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.walletId == null) {
      throw new ApiException("walletId is required and must be specified");
    }

    if (request.chargeType == null) {
      throw new ApiException("chargeType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<WalletChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/wallet/charge/verify/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id", value: request.walletId },
        { name: "charge_type", value: request.chargeType }
      ]
    });
  }
}


