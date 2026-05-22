// Generated from oceanengine/ad_open_sdk_go api/api_sugg_words_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SuggWordsV30Request, SuggWordsV30Response } from "../models/index";


export interface SuggWordsV30ApiOpenApiV30SuggWordsPostRequest {
  suggWordsV30Request?: SuggWordsV30Request;
}

export class SuggWordsV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SuggWordsPost(request: SuggWordsV30ApiOpenApiV30SuggWordsPostRequest): Promise<SuggWordsV30Response> {
    const response = await this.openApiV30SuggWordsPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SuggWordsPostWithHttpInfo(request: SuggWordsV30ApiOpenApiV30SuggWordsPostRequest): Promise<ApiResponse<SuggWordsV30Response>> {

    return this.apiClient.requestWithHttpInfo<SuggWordsV30Response>({
      method: "POST",
      path: "/open_api/v3.0/sugg_words/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.suggWordsV30Request
    });
  }
}


