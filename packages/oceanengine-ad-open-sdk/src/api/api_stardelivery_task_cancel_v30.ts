// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_cancel_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskCancelV30Request, StardeliveryTaskCancelV30Response } from "../models/index";


export interface StardeliveryTaskCancelV30ApiOpenApiV30StardeliveryTaskCancelPostRequest {
  stardeliveryTaskCancelV30Request?: StardeliveryTaskCancelV30Request;
}

export class StardeliveryTaskCancelV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskCancelPost(request: StardeliveryTaskCancelV30ApiOpenApiV30StardeliveryTaskCancelPostRequest): Promise<StardeliveryTaskCancelV30Response> {
    const response = await this.openApiV30StardeliveryTaskCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskCancelPostWithHttpInfo(request: StardeliveryTaskCancelV30ApiOpenApiV30StardeliveryTaskCancelPostRequest): Promise<ApiResponse<StardeliveryTaskCancelV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskCancelV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskCancelV30Request
    });
  }
}


