// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerDeepBidTypeGetV30AdType, EventManagerDeepBidTypeGetV30DeepExternalAction, EventManagerDeepBidTypeGetV30DeliveryMode, EventManagerDeepBidTypeGetV30ExternalAction, EventManagerDeepBidTypeGetV30LandingType, EventManagerDeepBidTypeGetV30MarketingGoal, EventManagerDeepBidTypeGetV30MicroPromotionType, EventManagerDeepBidTypeGetV30ProductSetting, EventManagerDeepBidTypeGetV30Response, EventManagerDeepBidTypeGetV30ValueOptimizedType } from "../models";


export interface OpenApiV30EventManagerDeepBidTypeGetGetRequest {
  advertiserId: number | string;
  externalAction: EventManagerDeepBidTypeGetV30ExternalAction;
  assetId?: number | string;
  deepExternalAction?: EventManagerDeepBidTypeGetV30DeepExternalAction;
  convertId?: number | string;
  deliveryMode?: EventManagerDeepBidTypeGetV30DeliveryMode;
  landingType?: EventManagerDeepBidTypeGetV30LandingType;
  adType?: EventManagerDeepBidTypeGetV30AdType;
  marketingGoal?: EventManagerDeepBidTypeGetV30MarketingGoal;
  microPromotionType?: EventManagerDeepBidTypeGetV30MicroPromotionType;
  productSetting?: EventManagerDeepBidTypeGetV30ProductSetting;
  valueOptimizedType?: EventManagerDeepBidTypeGetV30ValueOptimizedType;
}

export class EventManagerDeepBidTypeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerDeepBidTypeGetGet(request: OpenApiV30EventManagerDeepBidTypeGetGetRequest): Promise<EventManagerDeepBidTypeGetV30Response> {
    const response = await this.openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(request: OpenApiV30EventManagerDeepBidTypeGetGetRequest): Promise<ApiResponse<EventManagerDeepBidTypeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerDeepBidTypeGetGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30EventManagerDeepBidTypeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerDeepBidTypeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/deep_bid_type/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "asset_id", value: request.assetId },
        { name: "external_action", value: request.externalAction },
        { name: "deep_external_action", value: request.deepExternalAction },
        { name: "convert_id", value: request.convertId },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "landing_type", value: request.landingType },
        { name: "ad_type", value: request.adType },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "micro_promotion_type", value: request.microPromotionType },
        { name: "product_setting", value: request.productSetting },
        { name: "value_optimized_type", value: request.valueOptimizedType }
      ]
    });
  }
}


