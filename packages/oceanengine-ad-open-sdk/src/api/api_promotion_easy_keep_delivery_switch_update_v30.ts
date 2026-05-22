// Generated from oceanengine/ad_open_sdk_go api/api_promotion_easy_keep_delivery_switch_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { PromotionEasyKeepDeliverySwitchUpdateV30Request, PromotionEasyKeepDeliverySwitchUpdateV30Response } from "../models/index";


export interface PromotionEasyKeepDeliverySwitchUpdateV30ApiOpenApiV30PromotionEasyKeepDeliverySwitchUpdatePostRequest {
  promotionEasyKeepDeliverySwitchUpdateV30Request?: PromotionEasyKeepDeliverySwitchUpdateV30Request;
}

export class PromotionEasyKeepDeliverySwitchUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionEasyKeepDeliverySwitchUpdatePost(request: PromotionEasyKeepDeliverySwitchUpdateV30ApiOpenApiV30PromotionEasyKeepDeliverySwitchUpdatePostRequest): Promise<PromotionEasyKeepDeliverySwitchUpdateV30Response> {
    const response = await this.openApiV30PromotionEasyKeepDeliverySwitchUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionEasyKeepDeliverySwitchUpdatePostWithHttpInfo(request: PromotionEasyKeepDeliverySwitchUpdateV30ApiOpenApiV30PromotionEasyKeepDeliverySwitchUpdatePostRequest): Promise<ApiResponse<PromotionEasyKeepDeliverySwitchUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionEasyKeepDeliverySwitchUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_easy/keep_delivery_switch/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.promotionEasyKeepDeliverySwitchUpdateV30Request
    });
  }
}


