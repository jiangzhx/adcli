// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RecommendVideoListV30Request, RecommendVideoListV30Response } from "../models";


export interface OpenApiV30RecommendVideoListPostRequest {
  recommendVideoListV30Request?: RecommendVideoListV30Request;
}

export class RecommendVideoListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RecommendVideoListPost(request: OpenApiV30RecommendVideoListPostRequest): Promise<RecommendVideoListV30Response> {
    const response = await this.openApiV30RecommendVideoListPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RecommendVideoListPostWithHttpInfo(request: OpenApiV30RecommendVideoListPostRequest): Promise<ApiResponse<RecommendVideoListV30Response>> {

    return this.apiClient.requestWithHttpInfo<RecommendVideoListV30Response>({
      method: "POST",
      path: "/open_api/v3.0/recommend/video/list/",
      queryParams: [

      ],
      body: request.recommendVideoListV30Request
    });
  }
}


