// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectAwemeAuthorizedGetV30Response } from "../models";


export interface OpenApiV30UniProjectAwemeAuthorizedGetGetRequest {
  advertiserId: number;
  playletId: number;
  page?: number;
}

export class UniProjectAwemeAuthorizedGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectAwemeAuthorizedGetGet(request: OpenApiV30UniProjectAwemeAuthorizedGetGetRequest): Promise<UniProjectAwemeAuthorizedGetV30Response> {
    const response = await this.openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(request: OpenApiV30UniProjectAwemeAuthorizedGetGetRequest): Promise<ApiResponse<UniProjectAwemeAuthorizedGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30UniProjectAwemeAuthorizedGetGet");
    }

    if (request.playletId == null) {
      throw new ApiException("Missing the required parameter 'playletId' when calling openApiV30UniProjectAwemeAuthorizedGetGet");
    }
    return this.apiClient.requestWithHttpInfo<UniProjectAwemeAuthorizedGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/uni_project/aweme/authorized/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "playlet_id", value: request.playletId },
        { name: "page", value: request.page }
      ]
    });
  }
}


