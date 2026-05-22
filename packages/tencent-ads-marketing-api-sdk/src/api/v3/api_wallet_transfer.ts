// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_wallet_transfer.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WalletTransferAddRequest, WalletTransferAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface WalletTransferApiAddRequest {
  data: WalletTransferAddRequest;
}


export class WalletTransferApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: WalletTransferApiAddRequest): Promise<WalletTransferAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: WalletTransferApiAddRequest): Promise<ApiResponse<WalletTransferAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WalletTransferAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/wallet_transfer/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


