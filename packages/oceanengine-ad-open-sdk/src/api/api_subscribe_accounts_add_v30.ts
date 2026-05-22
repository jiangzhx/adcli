// Generated from oceanengine/ad_open_sdk_go api/api_subscribe_accounts_add_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubscribeAccountsAddV30Request, SubscribeAccountsAddV30Response } from "../models/index";


export interface SubscribeAccountsAddV30ApiOpenApiV30SubscribeAccountsAddPostRequest {
  aPPAccessToken: string;
  subscribeAccountsAddV30Request?: SubscribeAccountsAddV30Request;
}

export class SubscribeAccountsAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsAddPost(request: SubscribeAccountsAddV30ApiOpenApiV30SubscribeAccountsAddPostRequest): Promise<SubscribeAccountsAddV30Response> {
    const response = await this.openApiV30SubscribeAccountsAddPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SubscribeAccountsAddPostWithHttpInfo(request: SubscribeAccountsAddV30ApiOpenApiV30SubscribeAccountsAddPostRequest): Promise<ApiResponse<SubscribeAccountsAddV30Response>> {
    if (request.aPPAccessToken == null) {
      throw new ApiException("Missing the required parameter 'aPPAccessToken' when calling openApiV30SubscribeAccountsAddPost");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/subscribe/accounts/add/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.subscribeAccountsAddV30Request
    });
  }
}


