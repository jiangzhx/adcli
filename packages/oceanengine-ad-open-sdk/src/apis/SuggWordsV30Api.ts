// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SuggWordsV30Request, SuggWordsV30Response } from "../models";


export class SuggWordsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SuggWordsPost(request: SuggWordsV30Request): Promise<SuggWordsV30Response> {
    const response = await this.openApiV30SuggWordsPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SuggWordsPostWithHttpInfo(request: SuggWordsV30Request): Promise<ApiResponse<SuggWordsV30Response>> {
    return this.apiClient.requestWithHttpInfo<SuggWordsV30Response>({
      method: "POST",
      path: "/open_api/v3.0/sugg_words/",
      queryParams: [

      ],
      body: request
    });
  }
}


