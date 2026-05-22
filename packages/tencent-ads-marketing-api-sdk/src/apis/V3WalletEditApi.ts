// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WalletEditAddRequest, WalletEditAddResponseData } from "../models";

export interface V3WalletEditApiAddRequest {
  data: WalletEditAddRequest;
}


export class V3WalletEditApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3WalletEditApiAddRequest): Promise<WalletEditAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3WalletEditApiAddRequest): Promise<ApiResponse<WalletEditAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<WalletEditAddResponseData>({
      method: "POST",
      path: "/wallet_edit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


