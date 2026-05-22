// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_post_end_time_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskPostEndTimeUpdateV30Request, StardeliveryTaskPostEndTimeUpdateV30Response } from "../models/index";


export interface StardeliveryTaskPostEndTimeUpdateV30ApiOpenApiV30StardeliveryTaskPostEndTimeUpdatePostRequest {
  stardeliveryTaskPostEndTimeUpdateV30Request?: StardeliveryTaskPostEndTimeUpdateV30Request;
}

export class StardeliveryTaskPostEndTimeUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskPostEndTimeUpdatePost(request: StardeliveryTaskPostEndTimeUpdateV30ApiOpenApiV30StardeliveryTaskPostEndTimeUpdatePostRequest): Promise<StardeliveryTaskPostEndTimeUpdateV30Response> {
    const response = await this.openApiV30StardeliveryTaskPostEndTimeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskPostEndTimeUpdatePostWithHttpInfo(request: StardeliveryTaskPostEndTimeUpdateV30ApiOpenApiV30StardeliveryTaskPostEndTimeUpdatePostRequest): Promise<ApiResponse<StardeliveryTaskPostEndTimeUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskPostEndTimeUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/post_end_time/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskPostEndTimeUpdateV30Request
    });
  }
}


