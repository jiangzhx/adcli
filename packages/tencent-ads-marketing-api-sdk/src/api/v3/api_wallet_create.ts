// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_create.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletCreateAddRequest, WalletCreateAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletCreateApiAddRequest {
  data: WalletCreateAddRequest;
}


export class WalletCreateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WalletCreateApiAddRequest): Promise<WalletCreateAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WalletCreateApiAddRequest): Promise<ApiResponse<WalletCreateAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WalletCreateAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_create/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


