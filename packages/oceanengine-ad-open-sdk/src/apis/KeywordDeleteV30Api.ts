// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { KeywordDeleteV30Request, KeywordDeleteV30Response } from "../models";


export class KeywordDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordDeletePost(request: KeywordDeleteV30Request): Promise<KeywordDeleteV30Response> {
    const response = await this.openApiV30KeywordDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30KeywordDeletePostWithHttpInfo(request: KeywordDeleteV30Request): Promise<ApiResponse<KeywordDeleteV30Response>> {
    return this.apiClient.requestWithHttpInfo<KeywordDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/keyword/delete/",
      queryParams: [

      ],
      body: request
    });
  }
}


