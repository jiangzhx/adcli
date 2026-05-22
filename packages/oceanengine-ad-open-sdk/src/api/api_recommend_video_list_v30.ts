// Generated from oceanengine/ad_open_sdk_go api/api_recommend_video_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RecommendVideoListV30Request, RecommendVideoListV30Response } from "../models/index";


export interface RecommendVideoListV30ApiOpenApiV30RecommendVideoListPostRequest {
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

  async openApiV30RecommendVideoListPost(request: RecommendVideoListV30ApiOpenApiV30RecommendVideoListPostRequest): Promise<RecommendVideoListV30Response> {
    const response = await this.openApiV30RecommendVideoListPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RecommendVideoListPostWithHttpInfo(request: RecommendVideoListV30ApiOpenApiV30RecommendVideoListPostRequest): Promise<ApiResponse<RecommendVideoListV30Response>> {

    return this.apiClient.requestWithHttpInfo<RecommendVideoListV30Response>({
      method: "POST",
      path: "/open_api/v3.0/recommend/video/list/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.recommendVideoListV30Request
    });
  }
}


