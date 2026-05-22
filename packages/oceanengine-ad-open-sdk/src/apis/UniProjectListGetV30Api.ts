// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UniProjectListGetV30Filtering, UniProjectListGetV30Response } from "../models";


export interface OpenApiV30UniProjectListGetGetRequest {
  advertiserId: number | string;
  filtering?: UniProjectListGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class UniProjectListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectListGetGet(request: OpenApiV30UniProjectListGetGetRequest): Promise<UniProjectListGetV30Response> {
    const response = await this.openApiV30UniProjectListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30UniProjectListGetGetWithHttpInfo(request: OpenApiV30UniProjectListGetGetRequest): Promise<ApiResponse<UniProjectListGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30UniProjectListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<UniProjectListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/uni_project_list/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


