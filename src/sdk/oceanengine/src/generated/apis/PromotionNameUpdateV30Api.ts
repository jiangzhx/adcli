// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { PromotionNameUpdateV30Request, PromotionNameUpdateV30Response } from "../models";


export class PromotionNameUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionNameUpdatePost(promotionNameUpdateV30Request: PromotionNameUpdateV30Request): Promise<PromotionNameUpdateV30Response> {
    const response = await this.openApiV30PromotionNameUpdatePostWithHttpInfo(promotionNameUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionNameUpdatePostWithHttpInfo(promotionNameUpdateV30Request: PromotionNameUpdateV30Request): Promise<ApiResponse<PromotionNameUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionNameUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_name/update/",
      queryParams: [

      ],
      body: promotionNameUpdateV30Request
    });
  }
}


