// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionDeepbidUpdateV30Request, PromotionDeepbidUpdateV30Response } from "../models";


export class PromotionDeepbidUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionDeepbidUpdatePost(request: PromotionDeepbidUpdateV30Request): Promise<PromotionDeepbidUpdateV30Response> {
    const response = await this.openApiV30PromotionDeepbidUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionDeepbidUpdatePostWithHttpInfo(request: PromotionDeepbidUpdateV30Request): Promise<ApiResponse<PromotionDeepbidUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<PromotionDeepbidUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion/deepbid/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


