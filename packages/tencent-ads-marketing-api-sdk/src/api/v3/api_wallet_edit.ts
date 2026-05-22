// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_edit.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletEditAddRequest, WalletEditAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletEditApiAddRequest {
  data: WalletEditAddRequest;
}


export class WalletEditApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WalletEditApiAddRequest): Promise<WalletEditAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WalletEditApiAddRequest): Promise<ApiResponse<WalletEditAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WalletEditAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_edit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


