// Generated from oceanengine/ad_open_sdk_go api/api_shared_wallet_shared_relation_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SharedWalletSharedRelationCreateV30Request, SharedWalletSharedRelationCreateV30Response } from "../models/index";


export interface SharedWalletSharedRelationCreateV30ApiOpenApiV30SharedWalletSharedRelationCreatePostRequest {
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

  async openApiV30SharedWalletSharedRelationCreatePost(request: SharedWalletSharedRelationCreateV30ApiOpenApiV30SharedWalletSharedRelationCreatePostRequest): Promise<SharedWalletSharedRelationCreateV30Response> {
    const response = await this.openApiV30SharedWalletSharedRelationCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SharedWalletSharedRelationCreatePostWithHttpInfo(request: SharedWalletSharedRelationCreateV30ApiOpenApiV30SharedWalletSharedRelationCreatePostRequest): Promise<ApiResponse<SharedWalletSharedRelationCreateV30Response>> {

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


