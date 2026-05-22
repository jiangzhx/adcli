// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletWalletInfoGetV30AccountType, SharedWalletWalletInfoGetV30Response } from "../models";


export class SharedWalletWalletInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletInfoGetGet(accountId: number, walletIdList: number[], accountType: SharedWalletWalletInfoGetV30AccountType): Promise<SharedWalletWalletInfoGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletInfoGetGetWithHttpInfo(accountId, walletIdList, accountType);
    return response.data;
  }

  async openApiV30SharedWalletWalletInfoGetGetWithHttpInfo(accountId: number, walletIdList: number[], accountType: SharedWalletWalletInfoGetV30AccountType): Promise<ApiResponse<SharedWalletWalletInfoGetV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletInfoGetGet");
    }

    if (walletIdList == null) {
      throw new ApiException("Missing the required parameter 'walletIdList' when calling openApiV30SharedWalletWalletInfoGetGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_info/get/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "wallet_id_list", value: walletIdList, collectionFormat: "csv" }
      ]
    });
  }
}


