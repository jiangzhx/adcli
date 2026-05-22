// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_detail_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskDetailV30Response } from "../models/index";


export interface StardeliveryTaskDetailV30ApiOpenApiV30StardeliveryTaskDetailGetRequest {
  advertiserId: number | string;
  starTaskId: number | string;
}

export class StardeliveryTaskDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskDetailGet(request: StardeliveryTaskDetailV30ApiOpenApiV30StardeliveryTaskDetailGetRequest): Promise<StardeliveryTaskDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskDetailGetWithHttpInfo(request: StardeliveryTaskDetailV30ApiOpenApiV30StardeliveryTaskDetailGetRequest): Promise<ApiResponse<StardeliveryTaskDetailV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.starTaskId == null) {
      throw new ApiException("starTaskId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/detail/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "star_task_id", value: request.starTaskId }
      ]
    });
  }
}


