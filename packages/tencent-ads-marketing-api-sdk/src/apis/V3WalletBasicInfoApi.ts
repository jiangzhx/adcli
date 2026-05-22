// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletBasicInfoGetResponseData } from "../models";

export interface V3WalletBasicInfoApiGetRequest {
  accountId: number | string;
  walletId: number | string;
  fields?: unknown;
}


export class V3WalletBasicInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WalletBasicInfoApiGetRequest): Promise<WalletBasicInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WalletBasicInfoApiGetRequest): Promise<ApiResponse<WalletBasicInfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WalletBasicInfoGetResponseData>({
      method: "GET",
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


