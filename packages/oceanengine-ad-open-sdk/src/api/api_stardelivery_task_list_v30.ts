// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskListV30Filtering, StardeliveryTaskListV30Response } from "../models/index";


export interface StardeliveryTaskListV30ApiOpenApiV30StardeliveryTaskListGetRequest {
  advertiserId: number | string;
  starTaskVersion?: string;
  filtering?: StardeliveryTaskListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class StardeliveryTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskListGet(request: StardeliveryTaskListV30ApiOpenApiV30StardeliveryTaskListGetRequest): Promise<StardeliveryTaskListV30Response> {
    const response = await this.openApiV30StardeliveryTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskListGetWithHttpInfo(request: StardeliveryTaskListV30ApiOpenApiV30StardeliveryTaskListGetRequest): Promise<ApiResponse<StardeliveryTaskListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "star_task_version", value: request.starTaskVersion },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


