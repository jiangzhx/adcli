// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalInterestKeywordV30Response } from "../models";


export class LocalInterestKeywordV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalInterestKeywordGet(localAccountId: number, queryWords: string): Promise<LocalInterestKeywordV30Response> {
    const response = await this.openApiV30LocalInterestKeywordGetWithHttpInfo(localAccountId, queryWords);
    return response.data;
  }

  async openApiV30LocalInterestKeywordGetWithHttpInfo(localAccountId: number, queryWords: string): Promise<ApiResponse<LocalInterestKeywordV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalInterestKeywordGet");
    }

    if (queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApiV30LocalInterestKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalInterestKeywordV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/interest/keyword/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "query_words", value: queryWords }
      ]
    });
  }
}


