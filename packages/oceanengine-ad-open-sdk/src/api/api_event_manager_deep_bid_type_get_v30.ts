// Generated from oceanengine/ad_open_sdk_go api/api_event_manager_deep_bid_type_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerDeepBidTypeGetV30AdType, EventManagerDeepBidTypeGetV30DeepExternalAction, EventManagerDeepBidTypeGetV30DeliveryMode, EventManagerDeepBidTypeGetV30ExternalAction, EventManagerDeepBidTypeGetV30LandingType, EventManagerDeepBidTypeGetV30MarketingGoal, EventManagerDeepBidTypeGetV30MicroPromotionType, EventManagerDeepBidTypeGetV30ProductSetting, EventManagerDeepBidTypeGetV30Response, EventManagerDeepBidTypeGetV30ValueOptimizedType } from "../models/index";


export interface EventManagerDeepBidTypeGetV30ApiOpenApiV30EventManagerDeepBidTypeGetGetRequest {
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

  async openApiV30EventManagerDeepBidTypeGetGet(request: EventManagerDeepBidTypeGetV30ApiOpenApiV30EventManagerDeepBidTypeGetGetRequest): Promise<EventManagerDeepBidTypeGetV30Response> {
    const response = await this.openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerDeepBidTypeGetGetWithHttpInfo(request: EventManagerDeepBidTypeGetV30ApiOpenApiV30EventManagerDeepBidTypeGetGetRequest): Promise<ApiResponse<EventManagerDeepBidTypeGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.externalAction == null) {
      throw new ApiException("externalAction is required and must be specified");
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


