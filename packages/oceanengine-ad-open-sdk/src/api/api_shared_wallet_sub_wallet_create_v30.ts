// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_sub_wallet_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletSubWalletCreateV30Request, SharedWalletSubWalletCreateV30Response } from "../models/index";


export interface SharedWalletSubWalletCreateV30ApiOpenApiV30SharedWalletSubWalletCreatePostRequest {
  sharedWalletSubWalletCreateV30Request?: SharedWalletSubWalletCreateV30Request;
}

export class SharedWalletSubWalletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletSubWalletCreatePost(request: SharedWalletSubWalletCreateV30ApiOpenApiV30SharedWalletSubWalletCreatePostRequest): Promise<SharedWalletSubWalletCreateV30Response> {
    const response = await this.openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(request: SharedWalletSubWalletCreateV30ApiOpenApiV30SharedWalletSubWalletCreatePostRequest): Promise<ApiResponse<SharedWalletSubWalletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletSubWalletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/sub_wallet/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.sharedWalletSubWalletCreateV30Request
    });
  }
}


