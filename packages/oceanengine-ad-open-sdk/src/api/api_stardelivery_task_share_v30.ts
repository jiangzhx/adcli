// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_share_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskShareV30Request, StardeliveryTaskShareV30Response } from "../models/index";


export interface StardeliveryTaskShareV30ApiOpenApiV30StardeliveryTaskSharePostRequest {
  stardeliveryTaskShareV30Request?: StardeliveryTaskShareV30Request;
}

export class StardeliveryTaskShareV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskSharePost(request: StardeliveryTaskShareV30ApiOpenApiV30StardeliveryTaskSharePostRequest): Promise<StardeliveryTaskShareV30Response> {
    const response = await this.openApiV30StardeliveryTaskSharePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskSharePostWithHttpInfo(request: StardeliveryTaskShareV30ApiOpenApiV30StardeliveryTaskSharePostRequest): Promise<ApiResponse<StardeliveryTaskShareV30Response>> {

    return this.apiClient.requestWithHttpInfo<StardeliveryTaskShareV30Response>({
      method: "POST",
      path: "/open_api/v3.0/stardelivery/task/share/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.stardeliveryTaskShareV30Request
    });
  }
}


