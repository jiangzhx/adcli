// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubscribeAccountsRemoveV30Request, SubscribeAccountsRemoveV30Response } from "../models";


export class SubscribeAccountsRemoveV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsRemovePost(apPAccessToken: string, subscribeAccountsRemoveV30Request: SubscribeAccountsRemoveV30Request): Promise<SubscribeAccountsRemoveV30Response> {
    const response = await this.openApiV30SubscribeAccountsRemovePostWithHttpInfo(apPAccessToken, subscribeAccountsRemoveV30Request);
    return response.data;
  }

  async openApiV30SubscribeAccountsRemovePostWithHttpInfo(apPAccessToken: string, subscribeAccountsRemoveV30Request: SubscribeAccountsRemoveV30Request): Promise<ApiResponse<SubscribeAccountsRemoveV30Response>> {
    if (apPAccessToken == null) {
      throw new ApiException("Missing the required parameter 'apPAccessToken' when calling openApiV30SubscribeAccountsRemovePost");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsRemoveV30Response>({
      method: "POST",
      path: "/open_api/v3.0/subscribe/accounts/remove/",
      queryParams: [

      ],
      body: subscribeAccountsRemoveV30Request
    });
  }
}


