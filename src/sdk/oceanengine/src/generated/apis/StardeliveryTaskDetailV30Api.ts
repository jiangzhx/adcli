// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StardeliveryTaskDetailV30Response } from "../models";


export class StardeliveryTaskDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskDetailGet(advertiserId: number, starTaskId: number): Promise<StardeliveryTaskDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskDetailGetWithHttpInfo(advertiserId, starTaskId);
    return response.data;
  }

  async openApiV30StardeliveryTaskDetailGetWithHttpInfo(advertiserId: number, starTaskId: number): Promise<ApiResponse<StardeliveryTaskDetailV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskDetailGet");
    }

    if (starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "star_task_id", value: starTaskId }
      ]
    });
  }
}


