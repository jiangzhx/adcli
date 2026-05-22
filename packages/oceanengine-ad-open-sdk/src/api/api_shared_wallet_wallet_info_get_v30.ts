// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_wallet_info_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletWalletInfoGetV30AccountType, SharedWalletWalletInfoGetV30Response } from "../models/index";


export interface SharedWalletWalletInfoGetV30ApiOpenApiV30SharedWalletWalletInfoGetGetRequest {
  accountId: number | string;
  walletIdList: number[];
  accountType: SharedWalletWalletInfoGetV30AccountType;
}

export class SharedWalletWalletInfoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletWalletInfoGetGet(request: SharedWalletWalletInfoGetV30ApiOpenApiV30SharedWalletWalletInfoGetGetRequest): Promise<SharedWalletWalletInfoGetV30Response> {
    const response = await this.openApiV30SharedWalletWalletInfoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletWalletInfoGetGetWithHttpInfo(request: SharedWalletWalletInfoGetV30ApiOpenApiV30SharedWalletWalletInfoGetGetRequest): Promise<ApiResponse<SharedWalletWalletInfoGetV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30SharedWalletWalletInfoGetGet");
    }

    if (request.walletIdList == null) {
      throw new ApiException("Missing the required parameter 'walletIdList' when calling openApiV30SharedWalletWalletInfoGetGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30SharedWalletWalletInfoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_info/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id_list", value: request.walletIdList, collectionFormat: "csv" },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


