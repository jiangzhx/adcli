// 由 oceanengine/ad_open_sdk_go api/api_event_manager_optimized_goal_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EventManagerOptimizedGoalGetV30AdType, EventManagerOptimizedGoalGetV30AppPromotionType, EventManagerOptimizedGoalGetV30AppType, EventManagerOptimizedGoalGetV30DeliveryMedium, EventManagerOptimizedGoalGetV30DeliveryMode, EventManagerOptimizedGoalGetV30DeliveryType, EventManagerOptimizedGoalGetV30LandingType, EventManagerOptimizedGoalGetV30MarketingGoal, EventManagerOptimizedGoalGetV30MicroPromotionType, EventManagerOptimizedGoalGetV30MultiDeliveryMedium, EventManagerOptimizedGoalGetV30Response } from "../models/index";


export interface EventManagerOptimizedGoalGetV30ApiOpenApiV30EventManagerOptimizedGoalGetGetRequest {
  advertiserId: number | string;
  landingType: EventManagerOptimizedGoalGetV30LandingType;
  adType: EventManagerOptimizedGoalGetV30AdType;
  deliveryMedium?: EventManagerOptimizedGoalGetV30DeliveryMedium;
  multiDeliveryMedium?: EventManagerOptimizedGoalGetV30MultiDeliveryMedium;
  assetId?: number | string;
  packageName?: string;
  appType?: EventManagerOptimizedGoalGetV30AppType;
  appPromotionType?: EventManagerOptimizedGoalGetV30AppPromotionType;
  marketingGoal?: EventManagerOptimizedGoalGetV30MarketingGoal;
  quickAppId?: number | string;
  deliveryMode?: EventManagerOptimizedGoalGetV30DeliveryMode;
  miniProgramId?: string;
  microPromotionType?: EventManagerOptimizedGoalGetV30MicroPromotionType;
  microAppInstanceId?: number | string;
  deliveryType?: EventManagerOptimizedGoalGetV30DeliveryType;
}

export class EventManagerOptimizedGoalGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerOptimizedGoalGetGet(request: EventManagerOptimizedGoalGetV30ApiOpenApiV30EventManagerOptimizedGoalGetGetRequest): Promise<EventManagerOptimizedGoalGetV30Response> {
    const response = await this.openApiV30EventManagerOptimizedGoalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerOptimizedGoalGetGetWithHttpInfo(request: EventManagerOptimizedGoalGetV30ApiOpenApiV30EventManagerOptimizedGoalGetGetRequest): Promise<ApiResponse<EventManagerOptimizedGoalGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.landingType == null) {
      throw new ApiException("landingType is required and must be specified");
    }

    if (request.adType == null) {
      throw new ApiException("adType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerOptimizedGoalGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/optimized_goal/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "ad_type", value: request.adType },
        { name: "delivery_medium", value: request.deliveryMedium },
        { name: "multi_delivery_medium", value: request.multiDeliveryMedium },
        { name: "asset_id", value: request.assetId },
        { name: "package_name", value: request.packageName },
        { name: "app_type", value: request.appType },
        { name: "app_promotion_type", value: request.appPromotionType },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "quick_app_id", value: request.quickAppId },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "mini_program_id", value: request.miniProgramId },
        { name: "micro_promotion_type", value: request.microPromotionType },
        { name: "micro_app_instance_id", value: request.microAppInstanceId },
        { name: "delivery_type", value: request.deliveryType }
      ]
    });
  }
}


