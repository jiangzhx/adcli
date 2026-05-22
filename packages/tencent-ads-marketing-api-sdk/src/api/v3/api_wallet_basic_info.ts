// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_basic_info.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletBasicInfoGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletBasicInfoApiGetRequest {
  accountId: number | string;
  walletId: number | string;
  fields?: unknown;
}


export class WalletBasicInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WalletBasicInfoApiGetRequest): Promise<WalletBasicInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WalletBasicInfoApiGetRequest): Promise<ApiResponse<WalletBasicInfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WalletBasicInfoGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_basic_info/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id", value: request.walletId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


