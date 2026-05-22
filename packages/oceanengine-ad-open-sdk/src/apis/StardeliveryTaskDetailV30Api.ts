// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskDetailV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskDetailGetRequest {
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

  async openApiV30StardeliveryTaskDetailGet(request: OpenApiV30StardeliveryTaskDetailGetRequest): Promise<StardeliveryTaskDetailV30Response> {
    const response = await this.openApiV30StardeliveryTaskDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskDetailGetWithHttpInfo(request: OpenApiV30StardeliveryTaskDetailGetRequest): Promise<ApiResponse<StardeliveryTaskDetailV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskDetailGet");
    }

    if (request.starTaskId == null) {
      throw new ApiException("Missing the required parameter 'starTaskId' when calling openApiV30StardeliveryTaskDetailGet");
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


