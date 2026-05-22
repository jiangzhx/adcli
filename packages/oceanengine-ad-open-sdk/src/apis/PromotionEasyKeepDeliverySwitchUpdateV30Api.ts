// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionEasyKeepDeliverySwitchUpdateV30Request, PromotionEasyKeepDeliverySwitchUpdateV30Response } from "../models";


export class PromotionEasyKeepDeliverySwitchUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionEasyKeepDeliverySwitchUpdatePost(promotionEasyKeepDeliverySwitchUpdateV30Request: PromotionEasyKeepDeliverySwitchUpdateV30Request): Promise<PromotionEasyKeepDeliverySwitchUpdateV30Response> {
    const response = await this.openApiV30PromotionEasyKeepDeliverySwitchUpdatePostWithHttpInfo(promotionEasyKeepDeliverySwitchUpdateV30Request);
    return response.data;
  }

  async openApiV30PromotionEasyKeepDeliverySwitchUpdatePostWithHttpInfo(promotionEasyKeepDeliverySwitchUpdateV30Request: PromotionEasyKeepDeliverySwitchUpdateV30Request): Promise<ApiResponse<PromotionEasyKeepDeliverySwitchUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<PromotionEasyKeepDeliverySwitchUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/promotion_easy/keep_delivery_switch/update/",
      queryParams: [

      ],
      body: promotionEasyKeepDeliverySwitchUpdateV30Request
    });
  }
}


