// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_unshare_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskUnshareV30Request, StardeliveryTaskUnshareV30Response } from "../models/index";


export interface StardeliveryTaskUnshareV30ApiOpenApiV30StardeliveryTaskUnsharePostRequest {
  stardeliveryTaskUnshareV30Request?: StardeliveryTaskUnshareV30Request;
}

export class StardeliveryTaskUnshareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskUnsharePost(request: StardeliveryTaskUnshareV30ApiOpenApiV30StardeliveryTaskUnsharePostRequest): Promise<StardeliveryTaskUnshareV30Response> {
    const response = await this.openApiV30StardeliveryTaskUnsharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskUnsharePostWithHttpInfo(request: StardeliveryTaskUnshareV30ApiOpenApiV30StardeliveryTaskUnsharePostRequest): Promise<ApiResponse<StardeliveryTaskUnshareV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskUnshareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/unshare/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskUnshareV30Request
    });
  }
}


