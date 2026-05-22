// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalPromotionCreateV30Request, LocalPromotionCreateV30Response } from "../models";


export class LocalPromotionCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionCreatePost(localPromotionCreateV30Request: LocalPromotionCreateV30Request): Promise<LocalPromotionCreateV30Response> {
    const response = await this.openApiV30LocalPromotionCreatePostWithHttpInfo(localPromotionCreateV30Request);
    return response.data;
  }

  async openApiV30LocalPromotionCreatePostWithHttpInfo(localPromotionCreateV30Request: LocalPromotionCreateV30Request): Promise<ApiResponse<LocalPromotionCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalPromotionCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/promotion/create/",
      queryParams: [

      ],
      body: localPromotionCreateV30Request
    });
  }
}


