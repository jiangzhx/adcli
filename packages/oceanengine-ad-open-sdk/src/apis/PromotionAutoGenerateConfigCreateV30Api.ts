// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionAutoGenerateConfigCreateV30Request, PromotionAutoGenerateConfigCreateV30Response } from "../models";


export class PromotionAutoGenerateConfigCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionAutoGenerateConfigCreatePost(promotionAutoGenerateConfigCreateV30Request: PromotionAutoGenerateConfigCreateV30Request): Promise<PromotionAutoGenerateConfigCreateV30Response> {
    const response = await this.openApiV30PromotionAutoGenerateConfigCreatePostWithHttpInfo(promotionAutoGenerateConfigCreateV30Request);
    return response.data;
  }

  async openApiV30PromotionAutoGenerateConfigCreatePostWithHttpInfo(promotionAutoGenerateConfigCreateV30Request: PromotionAutoGenerateConfigCreateV30Request): Promise<ApiResponse<PromotionAutoGenerateConfigCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionAutoGenerateConfigCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/auto_generate_config/create/",
      queryParams: [

      ],
      body: promotionAutoGenerateConfigCreateV30Request
    });
  }
}


