// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SharedWalletSharedRelationCreateV30Request, SharedWalletSharedRelationCreateV30Response } from "../models";


export interface OpenApiV30SharedWalletSharedRelationCreatePostRequest {
  sharedWalletSharedRelationCreateV30Request?: SharedWalletSharedRelationCreateV30Request;
}

export class SharedWalletSharedRelationCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SharedWalletSharedRelationCreatePost(request: OpenApiV30SharedWalletSharedRelationCreatePostRequest): Promise<SharedWalletSharedRelationCreateV30Response> {
    const response = await this.openApiV30SharedWalletSharedRelationCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletSharedRelationCreatePostWithHttpInfo(request: OpenApiV30SharedWalletSharedRelationCreatePostRequest): Promise<ApiResponse<SharedWalletSharedRelationCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<SharedWalletSharedRelationCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/shared_wallet/shared_relation/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.sharedWalletSharedRelationCreateV30Request
    });
  }
}


