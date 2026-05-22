// Generated from oceanengine/ad_open_sdk_go api/api_subscribe_accounts_remove_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubscribeAccountsRemoveV30Request, SubscribeAccountsRemoveV30Response } from "../models/index";


export interface SubscribeAccountsRemoveV30ApiOpenApiV30SubscribeAccountsRemovePostRequest {
  aPPAccessToken: string;
  subscribeAccountsRemoveV30Request?: SubscribeAccountsRemoveV30Request;
}

export class SubscribeAccountsRemoveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsRemovePost(request: SubscribeAccountsRemoveV30ApiOpenApiV30SubscribeAccountsRemovePostRequest): Promise<SubscribeAccountsRemoveV30Response> {
    const response = await this.openApiV30SubscribeAccountsRemovePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SubscribeAccountsRemovePostWithHttpInfo(request: SubscribeAccountsRemoveV30ApiOpenApiV30SubscribeAccountsRemovePostRequest): Promise<ApiResponse<SubscribeAccountsRemoveV30Response>> {
    if (request.aPPAccessToken == null) {
      throw new ApiException("Missing the required parameter 'aPPAccessToken' when calling openApiV30SubscribeAccountsRemovePost");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsRemoveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/subscribe/accounts/remove/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.subscribeAccountsRemoveV30Request
    });
  }
}


