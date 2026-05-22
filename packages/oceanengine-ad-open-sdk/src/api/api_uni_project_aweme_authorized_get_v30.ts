// Generated from oceanengine/ad_open_sdk_go api/api_uni_project_aweme_authorized_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { UniProjectAwemeAuthorizedGetV30Response } from "../models/index";


export interface UniProjectAwemeAuthorizedGetV30ApiOpenApiV30UniProjectAwemeAuthorizedGetGetRequest {
  advertiserId: number | string;
  playletId: number | string;
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

  async openApiV30UniProjectAwemeAuthorizedGetGet(request: UniProjectAwemeAuthorizedGetV30ApiOpenApiV30UniProjectAwemeAuthorizedGetGetRequest): Promise<UniProjectAwemeAuthorizedGetV30Response> {
    const response = await this.openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectAwemeAuthorizedGetGetWithHttpInfo(request: UniProjectAwemeAuthorizedGetV30ApiOpenApiV30UniProjectAwemeAuthorizedGetGetRequest): Promise<ApiResponse<UniProjectAwemeAuthorizedGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.playletId == null) {
      throw new ApiException("playletId is required and must be specified");
    }

    if (request.playletId != null && Number(request.playletId) < 1) {
      throw new ApiException("playletId must be greater than 1");
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


