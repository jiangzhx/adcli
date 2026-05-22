// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubscribeAccountsRemoveV30Request, SubscribeAccountsRemoveV30Response } from "../models";


export interface OpenApiV30SubscribeAccountsRemovePostRequest {
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

  async openApiV30SubscribeAccountsRemovePost(request: OpenApiV30SubscribeAccountsRemovePostRequest): Promise<SubscribeAccountsRemoveV30Response> {
    const response = await this.openApiV30SubscribeAccountsRemovePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SubscribeAccountsRemovePostWithHttpInfo(request: OpenApiV30SubscribeAccountsRemovePostRequest): Promise<ApiResponse<SubscribeAccountsRemoveV30Response>> {
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


