// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_bind_advertiser.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletBindAdvertiserAddRequest } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletBindAdvertiserApiAddRequest {
  data: WalletBindAdvertiserAddRequest;
}


export class WalletBindAdvertiserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WalletBindAdvertiserApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WalletBindAdvertiserApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_bind_advertiser/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


