// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_author_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskAuthorDetailV30Filtering, StardeliveryTaskAuthorDetailV30Response } from "../models/index";


export interface StardeliveryTaskAuthorDetailV30ApiOpenApiV30StardeliveryTaskAuthorDetailGetRequest {
  advertiserId: number | string;
  starTaskId: number | string;
  page?: number;
  pageSize?: number;
  filtering?: StardeliveryTaskAuthorDetailV30Filtering;
}

export class StardeliveryTaskAuthorDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskAuthorDetailGet(request: StardeliveryTaskAuthorDetailV30ApiOpenApiV30StardeliveryTaskAuthorDetailGetRequest): Promise<StardeliveryTaskAuthorDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskAuthorDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskAuthorDetailGetWithHttpInfo(request: StardeliveryTaskAuthorDetailV30ApiOpenApiV30StardeliveryTaskAuthorDetailGetRequest): Promise<ApiResponse<StardeliveryTaskAuthorDetailV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskAuthorDetailGet");
    }

    if (request.starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskAuthorDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskAuthorDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task_author/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "star_task_id", value: request.starTaskId },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


