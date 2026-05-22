// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletChargeVerifyGetV30ChargeType, WalletChargeVerifyGetV30Response } from "../models";


export interface OpenApiV30WalletChargeVerifyGetGetRequest {
  accountId: number;
  walletId: number;
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

  async openApiV30WalletChargeVerifyGetGet(request: OpenApiV30WalletChargeVerifyGetGetRequest): Promise<WalletChargeVerifyGetV30Response> {
    const response = await this.openApiV30WalletChargeVerifyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30WalletChargeVerifyGetGetWithHttpInfo(request: OpenApiV30WalletChargeVerifyGetGetRequest): Promise<ApiResponse<WalletChargeVerifyGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30WalletChargeVerifyGetGet");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling openApiV30WalletChargeVerifyGetGet");
    }

    if (request.chargeType == null) {
      throw new ApiException("Missing the required parameter 'chargeType' when calling openApiV30WalletChargeVerifyGetGet");
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


