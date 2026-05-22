// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EventManagerOptimizedGoalGetV2V30AdType, EventManagerOptimizedGoalGetV2V30AppPromotionType, EventManagerOptimizedGoalGetV2V30AppType, EventManagerOptimizedGoalGetV2V30AssetType, EventManagerOptimizedGoalGetV2V30DeliveryMode, EventManagerOptimizedGoalGetV2V30DeliveryType, EventManagerOptimizedGoalGetV2V30DpaAdtype, EventManagerOptimizedGoalGetV2V30LandingType, EventManagerOptimizedGoalGetV2V30MarketingGoal, EventManagerOptimizedGoalGetV2V30MicroPromotionType, EventManagerOptimizedGoalGetV2V30MultiAssetType, EventManagerOptimizedGoalGetV2V30Response } from "../models";


export interface OpenApiV30EventManagerOptimizedGoalGetV2GetRequest {
  advertiserId: number | string;
  landingType: EventManagerOptimizedGoalGetV2V30LandingType;
  adType: EventManagerOptimizedGoalGetV2V30AdType;
  assetType?: EventManagerOptimizedGoalGetV2V30AssetType;
  multiAssetType?: EventManagerOptimizedGoalGetV2V30MultiAssetType;
  assetId?: number | string;
  packageName?: string;
  appType?: EventManagerOptimizedGoalGetV2V30AppType;
  appPromotionType?: EventManagerOptimizedGoalGetV2V30AppPromotionType;
  marketingGoal?: EventManagerOptimizedGoalGetV2V30MarketingGoal;
  quickAppId?: number | string;
  deliveryMode?: EventManagerOptimizedGoalGetV2V30DeliveryMode;
  miniProgramId?: string;
  dpaAdtype?: EventManagerOptimizedGoalGetV2V30DpaAdtype;
  microPromotionType?: EventManagerOptimizedGoalGetV2V30MicroPromotionType;
  microAppInstanceId?: number | string;
  deliveryType?: EventManagerOptimizedGoalGetV2V30DeliveryType;
}

export class EventManagerOptimizedGoalGetV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerOptimizedGoalGetV2Get(request: OpenApiV30EventManagerOptimizedGoalGetV2GetRequest): Promise<EventManagerOptimizedGoalGetV2V30Response> {
    const response = await this.openApiV30EventManagerOptimizedGoalGetV2GetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30EventManagerOptimizedGoalGetV2GetWithHttpInfo(request: OpenApiV30EventManagerOptimizedGoalGetV2GetRequest): Promise<ApiResponse<EventManagerOptimizedGoalGetV2V30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }

    if (request.landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }

    if (request.adType == null) {
      throw new ApiException("Missing the required parameter 'adType' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerOptimizedGoalGetV2V30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/optimized_goal/get_v2/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "landing_type", value: request.landingType },
        { name: "ad_type", value: request.adType },
        { name: "asset_type", value: request.assetType },
        { name: "multi_asset_type", value: request.multiAssetType },
        { name: "asset_id", value: request.assetId },
        { name: "package_name", value: request.packageName },
        { name: "app_type", value: request.appType },
        { name: "app_promotion_type", value: request.appPromotionType },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "quick_app_id", value: request.quickAppId },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "mini_program_id", value: request.miniProgramId },
        { name: "dpa_adtype", value: request.dpaAdtype },
        { name: "micro_promotion_type", value: request.microPromotionType },
        { name: "micro_app_instance_id", value: request.microAppInstanceId },
        { name: "delivery_type", value: request.deliveryType }
      ]
    });
  }
}


