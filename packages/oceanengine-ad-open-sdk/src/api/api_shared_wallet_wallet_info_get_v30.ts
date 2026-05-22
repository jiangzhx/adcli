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
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.walletIdList == null) {
      throw new ApiException("walletIdList is required and must be specified");
    }

    if (request.walletIdList != null && request.walletIdList.length < 1) {
      throw new ApiException("walletIdList must have at least 1 elements");
    }

    if (request.walletIdList != null && request.walletIdList.length > 200) {
      throw new ApiException("walletIdList must have less than 200 elements");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<SharedWalletWalletInfoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/shared_wallet/wallet_info/get/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id_list", value: request.walletIdList },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


