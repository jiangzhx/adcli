// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AccountUpdateV30Request, AccountUpdateV30Response } from "../models";


export class AccountUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AccountUpdatePost(request: AccountUpdateV30Request): Promise<AccountUpdateV30Response> {
    const response = await this.openApiV30AccountUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AccountUpdatePostWithHttpInfo(request: AccountUpdateV30Request): Promise<ApiResponse<AccountUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<AccountUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/account/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


