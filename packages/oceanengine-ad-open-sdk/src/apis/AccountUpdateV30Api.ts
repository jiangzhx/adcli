// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AccountUpdateV30Request, AccountUpdateV30Response } from "../models";


export interface OpenApiV30AccountUpdatePostRequest {
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

  async openApiV30AccountUpdatePost(request: OpenApiV30AccountUpdatePostRequest): Promise<AccountUpdateV30Response> {
    const response = await this.openApiV30AccountUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AccountUpdatePostWithHttpInfo(request: OpenApiV30AccountUpdatePostRequest): Promise<ApiResponse<AccountUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<AccountUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/account/update/",
      queryParams: [

      ],
      body: request.accountUpdateV30Request
    });
  }
}


