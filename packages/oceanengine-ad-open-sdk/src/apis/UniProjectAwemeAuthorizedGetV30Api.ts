// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectAwemeAuthorizedGetV30Response } from "../models";


export class UniProjectAwemeAuthorizedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectAwemeAuthorizedGetGet(advertiserId: number, playletId: number, page: number): Promise<UniProjectAwemeAuthorizedGetV30Response> {
    const response = await this.openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(advertiserId, playletId, page);
    return response.data;
  }

  async openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(advertiserId: number, playletId: number, page: number): Promise<ApiResponse<UniProjectAwemeAuthorizedGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30UniProjectAwemeAuthorizedGetGet");
    }

    if (playletId == null) {
      throw new ApiException("Missing the required parameter 'playletId' when calling openApiV30UniProjectAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<UniProjectAwemeAuthorizedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/uni_project/aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "playlet_id", value: playletId },
        { name: "page", value: page }
      ]
    });
  }
}


