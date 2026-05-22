// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_get_binding_advertiser.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletGetBindingAdvertiserGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletGetBindingAdvertiserApiGetRequest {
  accountId: number | string;
  walletId: number | string;
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class WalletGetBindingAdvertiserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WalletGetBindingAdvertiserApiGetRequest): Promise<WalletGetBindingAdvertiserGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WalletGetBindingAdvertiserApiGetRequest): Promise<ApiResponse<WalletGetBindingAdvertiserGetResponseData>> {
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
      basePath: TencentAdsV30Configuration.basePath,
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


