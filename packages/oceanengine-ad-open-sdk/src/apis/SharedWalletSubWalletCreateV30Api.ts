// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletSubWalletCreateV30Request, SharedWalletSubWalletCreateV30Response } from "../models";


export interface OpenApiV30SharedWalletSubWalletCreatePostRequest {
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

  async openApiV30SharedWalletSubWalletCreatePost(request: OpenApiV30SharedWalletSubWalletCreatePostRequest): Promise<SharedWalletSubWalletCreateV30Response> {
    const response = await this.openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(request: OpenApiV30SharedWalletSubWalletCreatePostRequest): Promise<ApiResponse<SharedWalletSubWalletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletSubWalletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/sub_wallet/create/",
      queryParams: [

      ],
      body: request.sharedWalletSubWalletCreateV30Request
    });
  }
}


