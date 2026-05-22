// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalAwemeAuthorizedGetV30Filtering, LocalAwemeAuthorizedGetV30MarketingGoal, LocalAwemeAuthorizedGetV30Response } from "../models";


export class LocalAwemeAuthorizedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAwemeAuthorizedGetGet(localAccountId: number, marketingGoal: LocalAwemeAuthorizedGetV30MarketingGoal, filtering: LocalAwemeAuthorizedGetV30Filtering, page: number, pageSize: number): Promise<LocalAwemeAuthorizedGetV30Response> {
    const response = await this.openApiV30LocalAwemeAuthorizedGetGetWithHttpInfo(localAccountId, marketingGoal, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalAwemeAuthorizedGetGetWithHttpInfo(localAccountId: number, marketingGoal: LocalAwemeAuthorizedGetV30MarketingGoal, filtering: LocalAwemeAuthorizedGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalAwemeAuthorizedGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalAwemeAuthorizedGetGet");
    }

    if (marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV30LocalAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalAwemeAuthorizedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/aweme/authorized/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "marketing_goal", value: marketingGoal }
      ]
    });
  }
}


