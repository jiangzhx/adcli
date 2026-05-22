// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskListV30Filtering, StardeliveryTaskListV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskListGetRequest {
  advertiserId: number;
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

  async openApiV30StardeliveryTaskListGet(request: OpenApiV30StardeliveryTaskListGetRequest): Promise<StardeliveryTaskListV30Response> {
    const response = await this.openApiV30StardeliveryTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskListGetWithHttpInfo(request: OpenApiV30StardeliveryTaskListGetRequest): Promise<ApiResponse<StardeliveryTaskListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskListGet");
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


