// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SubscribeAccountsAddV30Request, SubscribeAccountsAddV30Response } from "../models";


export class SubscribeAccountsAddV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsAddPost(apPAccessToken: string, subscribeAccountsAddV30Request: SubscribeAccountsAddV30Request): Promise<SubscribeAccountsAddV30Response> {
    const response = await this.openApiV30SubscribeAccountsAddPostWithHttpInfo(apPAccessToken, subscribeAccountsAddV30Request);
    return response.data;
  }

  async openApiV30SubscribeAccountsAddPostWithHttpInfo(apPAccessToken: string, subscribeAccountsAddV30Request: SubscribeAccountsAddV30Request): Promise<ApiResponse<SubscribeAccountsAddV30Response>> {
    if (apPAccessToken == null) {
      throw new ApiException("Missing the required parameter 'apPAccessToken' when calling openApiV30SubscribeAccountsAddPost");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsAddV30Response>({
      method: "POST",
      path: "/open_api/v3.0/subscribe/accounts/add/",
      queryParams: [

      ],
      body: subscribeAccountsAddV30Request
    });
  }
}


