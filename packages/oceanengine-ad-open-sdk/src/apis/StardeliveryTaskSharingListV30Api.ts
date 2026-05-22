// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskSharingListV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskSharingListGetRequest {
  advertiserId: number;
  starTaskId: number;
  page?: number;
  pageSize?: number;
}

export class StardeliveryTaskSharingListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskSharingListGet(request: OpenApiV30StardeliveryTaskSharingListGetRequest): Promise<StardeliveryTaskSharingListV30Response> {
    const response = await this.openApiV30StardeliveryTaskSharingListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskSharingListGetWithHttpInfo(request: OpenApiV30StardeliveryTaskSharingListGetRequest): Promise<ApiResponse<StardeliveryTaskSharingListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskSharingListGet");
    }

    if (request.starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskSharingListGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskSharingListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/sharing/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "star_task_id", value: request.starTaskId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


