// Generated from oceanengine/ad_open_sdk_go api/api_local_interest_keyword_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalInterestKeywordV30Response } from "../models/index";


export interface LocalInterestKeywordV30ApiOpenApiV30LocalInterestKeywordGetRequest {
  localAccountId: number | string;
  queryWords: string;
}

export class LocalInterestKeywordV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalInterestKeywordGet(request: LocalInterestKeywordV30ApiOpenApiV30LocalInterestKeywordGetRequest): Promise<LocalInterestKeywordV30Response> {
    const response = await this.openApiV30LocalInterestKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalInterestKeywordGetWithHttpInfo(request: LocalInterestKeywordV30ApiOpenApiV30LocalInterestKeywordGetRequest): Promise<ApiResponse<LocalInterestKeywordV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalInterestKeywordGet");
    }

    if (request.queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApiV30LocalInterestKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalInterestKeywordV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/interest/keyword/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "query_words", value: request.queryWords }
      ]
    });
  }
}


