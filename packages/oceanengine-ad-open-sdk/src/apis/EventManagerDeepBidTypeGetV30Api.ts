// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerDeepBidTypeGetV30AdType, EventManagerDeepBidTypeGetV30DeepExternalAction, EventManagerDeepBidTypeGetV30DeliveryMode, EventManagerDeepBidTypeGetV30ExternalAction, EventManagerDeepBidTypeGetV30LandingType, EventManagerDeepBidTypeGetV30MarketingGoal, EventManagerDeepBidTypeGetV30MicroPromotionType, EventManagerDeepBidTypeGetV30ProductSetting, EventManagerDeepBidTypeGetV30Response, EventManagerDeepBidTypeGetV30ValueOptimizedType } from "../models";


export class EventManagerDeepBidTypeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerDeepBidTypeGetGet(advertiserId: number, externalAction: EventManagerDeepBidTypeGetV30ExternalAction, assetId: number, deepExternalAction: EventManagerDeepBidTypeGetV30DeepExternalAction, convertId: number, deliveryMode: EventManagerDeepBidTypeGetV30DeliveryMode, landingType: EventManagerDeepBidTypeGetV30LandingType, adType: EventManagerDeepBidTypeGetV30AdType, marketingGoal: EventManagerDeepBidTypeGetV30MarketingGoal, microPromotionType: EventManagerDeepBidTypeGetV30MicroPromotionType, productSetting: EventManagerDeepBidTypeGetV30ProductSetting, valueOptimizedType: EventManagerDeepBidTypeGetV30ValueOptimizedType): Promise<EventManagerDeepBidTypeGetV30Response> {
    const response = await this.openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(advertiserId, externalAction, assetId, deepExternalAction, convertId, deliveryMode, landingType, adType, marketingGoal, microPromotionType, productSetting, valueOptimizedType);
    return response.data;
  }

  async openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(advertiserId: number, externalAction: EventManagerDeepBidTypeGetV30ExternalAction, assetId: number, deepExternalAction: EventManagerDeepBidTypeGetV30DeepExternalAction, convertId: number, deliveryMode: EventManagerDeepBidTypeGetV30DeliveryMode, landingType: EventManagerDeepBidTypeGetV30LandingType, adType: EventManagerDeepBidTypeGetV30AdType, marketingGoal: EventManagerDeepBidTypeGetV30MarketingGoal, microPromotionType: EventManagerDeepBidTypeGetV30MicroPromotionType, productSetting: EventManagerDeepBidTypeGetV30ProductSetting, valueOptimizedType: EventManagerDeepBidTypeGetV30ValueOptimizedType): Promise<ApiResponse<EventManagerDeepBidTypeGetV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerDeepBidTypeGetGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30EventManagerDeepBidTypeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerDeepBidTypeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/deep_bid_type/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "asset_id", value: assetId },
        { name: "external_action", value: externalAction },
        { name: "deep_external_action", value: deepExternalAction },
        { name: "convert_id", value: convertId },
        { name: "delivery_mode", value: deliveryMode },
        { name: "landing_type", value: landingType },
        { name: "ad_type", value: adType },
        { name: "marketing_goal", value: marketingGoal },
        { name: "micro_promotion_type", value: microPromotionType },
        { name: "product_setting", value: productSetting },
        { name: "value_optimized_type", value: valueOptimizedType }
      ]
    });
  }
}


