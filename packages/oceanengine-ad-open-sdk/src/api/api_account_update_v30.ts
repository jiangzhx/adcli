// Generated from oceanengine/ad_open_sdk_go api/api_account_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AccountUpdateV30Request, AccountUpdateV30Response } from "../models/index";


export interface AccountUpdateV30ApiOpenApiV30AccountUpdatePostRequest {
  accountUpdateV30Request?: AccountUpdateV30Request;
}

export class AccountUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AccountUpdatePost(request: AccountUpdateV30ApiOpenApiV30AccountUpdatePostRequest): Promise<AccountUpdateV30Response> {
    const response = await this.openApiV30AccountUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AccountUpdatePostWithHttpInfo(request: AccountUpdateV30ApiOpenApiV30AccountUpdatePostRequest): Promise<ApiResponse<AccountUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AccountUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/account/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.accountUpdateV30Request
    });
  }
}


