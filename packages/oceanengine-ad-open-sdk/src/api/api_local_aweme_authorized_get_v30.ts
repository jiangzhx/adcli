// Generated from oceanengine/ad_open_sdk_go api/api_local_aweme_authorized_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalAwemeAuthorizedGetV30Filtering, LocalAwemeAuthorizedGetV30MarketingGoal, LocalAwemeAuthorizedGetV30Response } from "../models/index";


export interface LocalAwemeAuthorizedGetV30ApiOpenApiV30LocalAwemeAuthorizedGetGetRequest {
  localAccountId: number | string;
  marketingGoal: LocalAwemeAuthorizedGetV30MarketingGoal;
  filtering?: LocalAwemeAuthorizedGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalAwemeAuthorizedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAwemeAuthorizedGetGet(request: LocalAwemeAuthorizedGetV30ApiOpenApiV30LocalAwemeAuthorizedGetGetRequest): Promise<LocalAwemeAuthorizedGetV30Response> {
    const response = await this.openApiV30LocalAwemeAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalAwemeAuthorizedGetGetWithHttpInfo(request: LocalAwemeAuthorizedGetV30ApiOpenApiV30LocalAwemeAuthorizedGetGetRequest): Promise<ApiResponse<LocalAwemeAuthorizedGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalAwemeAuthorizedGetGet");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling openApiV30LocalAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalAwemeAuthorizedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/aweme/authorized/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "marketing_goal", value: request.marketingGoal }
      ]
    });
  }
}


