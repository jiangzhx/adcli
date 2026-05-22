// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskSharingListV30Response } from "../models";


export class StardeliveryTaskSharingListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskSharingListGet(advertiserId: number, starTaskId: number, page: number, pageSize: number): Promise<StardeliveryTaskSharingListV30Response> {
    const response = await this.openApiV30StardeliveryTaskSharingListGetWithHttpInfo(advertiserId, starTaskId, page, pageSize);
    return response.data;
  }

  async openApiV30StardeliveryTaskSharingListGetWithHttpInfo(advertiserId: number, starTaskId: number, page: number, pageSize: number): Promise<ApiResponse<StardeliveryTaskSharingListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskSharingListGet");
    }

    if (starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskSharingListGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskSharingListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/sharing/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "star_task_id", value: starTaskId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


