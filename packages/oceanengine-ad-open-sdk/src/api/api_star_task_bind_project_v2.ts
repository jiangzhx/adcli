// Generated from oceanengine/ad_open_sdk_go api/api_star_task_bind_project_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarTaskBindProjectV2Request, StarTaskBindProjectV2Response } from "../models/index";


export interface StarTaskBindProjectV2ApiOpenApi2StarTaskBindProjectPostRequest {
  starTaskBindProjectV2Request?: StarTaskBindProjectV2Request;
}

export class StarTaskBindProjectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarTaskBindProjectPost(request: StarTaskBindProjectV2ApiOpenApi2StarTaskBindProjectPostRequest): Promise<StarTaskBindProjectV2Response> {
    const response = await this.openApi2StarTaskBindProjectPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarTaskBindProjectPostWithHttpInfo(request: StarTaskBindProjectV2ApiOpenApi2StarTaskBindProjectPostRequest): Promise<ApiResponse<StarTaskBindProjectV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarTaskBindProjectV2Response>({
      method: "POST",
      path: "/open_api/2/star/task/bind_project/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starTaskBindProjectV2Request
    });
  }
}


