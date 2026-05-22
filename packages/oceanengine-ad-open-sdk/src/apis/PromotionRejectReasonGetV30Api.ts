// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionRejectReasonGetV30DeliveryMode, PromotionRejectReasonGetV30Response } from "../models";


export class PromotionRejectReasonGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionRejectReasonGetGet(advertiserId: number, promotionIds: number[], deliveryMode: PromotionRejectReasonGetV30DeliveryMode, needMaterialLegoMid: boolean): Promise<PromotionRejectReasonGetV30Response> {
    const response = await this.openApiV30PromotionRejectReasonGetGetWithHttpInfo(advertiserId, promotionIds, deliveryMode, needMaterialLegoMid);
    return response.data;
  }

  async openApiV30PromotionRejectReasonGetGetWithHttpInfo(advertiserId: number, promotionIds: number[], deliveryMode: PromotionRejectReasonGetV30DeliveryMode, needMaterialLegoMid: boolean): Promise<ApiResponse<PromotionRejectReasonGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionRejectReasonGetGet");
    }

    if (promotionIds == null) {
      throw new ApiException("Missing the required parameter 'promotionIds' when calling openApiV30PromotionRejectReasonGetGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionRejectReasonGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/reject_reason/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "delivery_mode", value: deliveryMode },
        { name: "need_material_lego_mid", value: needMaterialLegoMid },
        { name: "promotion_ids", value: promotionIds, collectionFormat: "csv" }
      ]
    });
  }
}


