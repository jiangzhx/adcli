// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletGetBindingAdvertiserGetResponseData } from "../models";

export interface V3WalletGetBindingAdvertiserApiGetRequest {
  accountId: number | string;
  walletId: number | string;
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class V3WalletGetBindingAdvertiserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WalletGetBindingAdvertiserApiGetRequest): Promise<WalletGetBindingAdvertiserGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WalletGetBindingAdvertiserApiGetRequest): Promise<ApiResponse<WalletGetBindingAdvertiserGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.walletId == null) {
      throw new ApiException("Missing the required parameter 'walletId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WalletGetBindingAdvertiserGetResponseData>({
      method: "GET",
      path: "/wallet_get_binding_advertiser/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "wallet_id", value: request.walletId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


