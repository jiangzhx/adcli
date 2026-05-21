// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { UniProjectListGetV30Filtering, UniProjectListGetV30Response } from "../models";


export class UniProjectListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30UniProjectListGetGet(advertiserId: number, filtering: UniProjectListGetV30Filtering, page: number, pageSize: number): Promise<UniProjectListGetV30Response> {
    const response = await this.openApiV30UniProjectListGetGetWithHttpInfo(advertiserId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30UniProjectListGetGetWithHttpInfo(advertiserId: number, filtering: UniProjectListGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<UniProjectListGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30UniProjectListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<UniProjectListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/uni_project_list/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


