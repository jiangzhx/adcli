// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalActionKeywordV30ActionDays, LocalActionKeywordV30Response } from "../models";


export interface OpenApiV30LocalActionKeywordGetRequest {
  localAccountId: number | string;
  queryWords: string;
  actionDays: LocalActionKeywordV30ActionDays;
}

export class LocalActionKeywordV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalActionKeywordGet(request: OpenApiV30LocalActionKeywordGetRequest): Promise<LocalActionKeywordV30Response> {
    const response = await this.openApiV30LocalActionKeywordGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalActionKeywordGetWithHttpInfo(request: OpenApiV30LocalActionKeywordGetRequest): Promise<ApiResponse<LocalActionKeywordV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalActionKeywordGet");
    }

    if (request.queryWords == null) {
      throw new ApiException("Missing the required parameter 'queryWords' when calling openApiV30LocalActionKeywordGet");
    }

    if (request.actionDays == null) {
      throw new ApiException("Missing the required parameter 'actionDays' when calling openApiV30LocalActionKeywordGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalActionKeywordV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/action/keyword/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "query_words", value: request.queryWords },
        { name: "action_days", value: request.actionDays }
      ]
    });
  }
}


