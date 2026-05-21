// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { PromotionUpdateV30Request, PromotionUpdateV30Response } from "../models";


export class PromotionUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionUpdatePost(promotionUpdateV30Request: PromotionUpdateV30Request): Promise<PromotionUpdateV30Response> {
    const response = await this.openApiV30PromotionUpdatePostWithHttpInfo(promotionUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionUpdatePostWithHttpInfo(promotionUpdateV30Request: PromotionUpdateV30Request): Promise<ApiResponse<PromotionUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/update/",
      queryParams: [

      ],
      body: promotionUpdateV30Request
    });
  }
}


