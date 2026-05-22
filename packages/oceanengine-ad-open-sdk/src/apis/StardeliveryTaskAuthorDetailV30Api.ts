// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskAuthorDetailV30Filtering, StardeliveryTaskAuthorDetailV30Response } from "../models";


export class StardeliveryTaskAuthorDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskAuthorDetailGet(advertiserId: number, starTaskId: number, page: number, pageSize: number, filtering: StardeliveryTaskAuthorDetailV30Filtering): Promise<StardeliveryTaskAuthorDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskAuthorDetailGetWithHttpInfo(advertiserId, starTaskId, page, pageSize, filtering);
    return response.data;
  }

  async openApiV30StardeliveryTaskAuthorDetailGetWithHttpInfo(advertiserId: number, starTaskId: number, page: number, pageSize: number, filtering: StardeliveryTaskAuthorDetailV30Filtering): Promise<ApiResponse<StardeliveryTaskAuthorDetailV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskAuthorDetailGet");
    }

    if (starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskAuthorDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskAuthorDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task_author/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "star_task_id", value: starTaskId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


