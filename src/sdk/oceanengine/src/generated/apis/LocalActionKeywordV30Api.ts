// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalActionKeywordV30ActionDays, LocalActionKeywordV30Response } from "../models";


export class LocalActionKeywordV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalActionKeywordGet(localAccountId: number, queryWords: string, actionDays: LocalActionKeywordV30ActionDays): Promise<LocalActionKeywordV30Response> {
    const response = await this.openApiV30LocalActionKeywordGetWithHttpInfo(localAccountId, queryWords, actionDays);
    return response.data;
  }

  async openApiV30LocalActionKeywordGetWithHttpInfo(localAccountId: number, queryWords: string, actionDays: LocalActionKeywordV30ActionDays): Promise<ApiResponse<LocalActionKeywordV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalActionKeywordGet");
    }

    if (queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApiV30LocalActionKeywordGet");
    }

    if (actionDays == null) {
      throw new ApiException("Missing the required parameter 'actionDays' when calling openApiV30LocalActionKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalActionKeywordV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/action/keyword/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "query_words", value: queryWords },
        { name: "action_days", value: actionDays }
      ]
    });
  }
}


