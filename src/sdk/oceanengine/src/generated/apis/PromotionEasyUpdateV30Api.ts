// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { PromotionEasyUpdateV30Request, PromotionEasyUpdateV30Response } from "../models";


export class PromotionEasyUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionEasyUpdatePost(promotionEasyUpdateV30Request: PromotionEasyUpdateV30Request): Promise<PromotionEasyUpdateV30Response> {
    const response = await this.openApiV30PromotionEasyUpdatePostWithHttpInfo(promotionEasyUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionEasyUpdatePostWithHttpInfo(promotionEasyUpdateV30Request: PromotionEasyUpdateV30Request): Promise<ApiResponse<PromotionEasyUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionEasyUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_easy/update/",
      queryParams: [

      ],
      body: promotionEasyUpdateV30Request
    });
  }
}


