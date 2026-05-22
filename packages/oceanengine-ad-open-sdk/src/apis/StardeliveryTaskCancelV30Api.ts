// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskCancelV30Request, StardeliveryTaskCancelV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskCancelPostRequest {
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

  async openApiV30StardeliveryTaskCancelPost(request: OpenApiV30StardeliveryTaskCancelPostRequest): Promise<StardeliveryTaskCancelV30Response> {
    const response = await this.openApiV30StardeliveryTaskCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskCancelPostWithHttpInfo(request: OpenApiV30StardeliveryTaskCancelPostRequest): Promise<ApiResponse<StardeliveryTaskCancelV30Response>> {

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


