// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { WalletChargeVerifyGetV30ChargeType, WalletChargeVerifyGetV30Response } from "../models";


export class WalletChargeVerifyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30WalletChargeVerifyGetGet(accountId: number, walletId: number, chargeType: WalletChargeVerifyGetV30ChargeType): Promise<WalletChargeVerifyGetV30Response> {
    const response = await this.openApiV30WalletChargeVerifyGetGetWithHttpInfo(accountId, walletId, chargeType);
    return response.data;
  }

  async openApiV30WalletChargeVerifyGetGetWithHttpInfo(accountId: number, walletId: number, chargeType: WalletChargeVerifyGetV30ChargeType): Promise<ApiResponse<WalletChargeVerifyGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30WalletChargeVerifyGetGet");
    }

    if (walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30WalletChargeVerifyGetGet");
    }

    if (chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30WalletChargeVerifyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<WalletChargeVerifyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/wallet/charge/verify/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "wallet_id", value: walletId },
        { name: "charge_type", value: chargeType }
      ]
    });
  }
}


