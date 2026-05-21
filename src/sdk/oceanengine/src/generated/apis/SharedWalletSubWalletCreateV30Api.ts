// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SharedWalletSubWalletCreateV30Request, SharedWalletSubWalletCreateV30Response } from "../models";


export class SharedWalletSubWalletCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletSubWalletCreatePost(sharedWalletSubWalletCreateV30Request: SharedWalletSubWalletCreateV30Request): Promise<SharedWalletSubWalletCreateV30Response> {
    const response = await this.openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(sharedWalletSubWalletCreateV30Request);
    return response.data;
  }

  async openApiV30SharedWalletSubWalletCreatePostWithHttpInfo(sharedWalletSubWalletCreateV30Request: SharedWalletSubWalletCreateV30Request): Promise<ApiResponse<SharedWalletSubWalletCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletSubWalletCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/sub_wallet/create/",
      queryParams: [

      ],
      body: sharedWalletSubWalletCreateV30Request
    });
  }
}


