// Generated from oceanengine/ad_open_sdk_go api/api_local_promotion_create_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalPromotionCreateV30Request, LocalPromotionCreateV30Response } from "../models/index";


export interface LocalPromotionCreateV30ApiOpenApiV30LocalPromotionCreatePostRequest {
  localPromotionCreateV30Request?: LocalPromotionCreateV30Request;
}

export class LocalPromotionCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionCreatePost(request: LocalPromotionCreateV30ApiOpenApiV30LocalPromotionCreatePostRequest): Promise<LocalPromotionCreateV30Response> {
    const response = await this.openApiV30LocalPromotionCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalPromotionCreatePostWithHttpInfo(request: LocalPromotionCreateV30ApiOpenApiV30LocalPromotionCreatePostRequest): Promise<ApiResponse<LocalPromotionCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localPromotionCreateV30Request
    });
  }
}


