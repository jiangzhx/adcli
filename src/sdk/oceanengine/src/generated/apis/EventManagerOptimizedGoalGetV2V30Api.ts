// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { EventManagerOptimizedGoalGetV2V30AdType, EventManagerOptimizedGoalGetV2V30AppPromotionType, EventManagerOptimizedGoalGetV2V30AppType, EventManagerOptimizedGoalGetV2V30AssetType, EventManagerOptimizedGoalGetV2V30DeliveryMode, EventManagerOptimizedGoalGetV2V30DeliveryType, EventManagerOptimizedGoalGetV2V30DpaAdtype, EventManagerOptimizedGoalGetV2V30LandingType, EventManagerOptimizedGoalGetV2V30MarketingGoal, EventManagerOptimizedGoalGetV2V30MicroPromotionType, EventManagerOptimizedGoalGetV2V30MultiAssetType, EventManagerOptimizedGoalGetV2V30Response } from "../models";


export class EventManagerOptimizedGoalGetV2V30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30EventManagerOptimizedGoalGetV2Get(advertiserId: number, landingType: EventManagerOptimizedGoalGetV2V30LandingType, adType: EventManagerOptimizedGoalGetV2V30AdType, assetType: EventManagerOptimizedGoalGetV2V30AssetType, multiAssetType: EventManagerOptimizedGoalGetV2V30MultiAssetType, assetId: number, packageName: string, appType: EventManagerOptimizedGoalGetV2V30AppType, appPromotionType: EventManagerOptimizedGoalGetV2V30AppPromotionType, marketingGoal: EventManagerOptimizedGoalGetV2V30MarketingGoal, quickAppId: number, deliveryMode: EventManagerOptimizedGoalGetV2V30DeliveryMode, miniProgramId: string, dpaAdtype: EventManagerOptimizedGoalGetV2V30DpaAdtype, microPromotionType: EventManagerOptimizedGoalGetV2V30MicroPromotionType, microAppInstanceId: number, deliveryType: EventManagerOptimizedGoalGetV2V30DeliveryType): Promise<EventManagerOptimizedGoalGetV2V30Response> {
    const response = await this.openApiV30EventManagerOptimizedGoalGetV2GetWithHttpInfo(advertiserId, landingType, adType, assetType, multiAssetType, assetId, packageName, appType, appPromotionType, marketingGoal, quickAppId, deliveryMode, miniProgramId, dpaAdtype, microPromotionType, microAppInstanceId, deliveryType);
    return response.data;
  }

  async openApiV30EventManagerOptimizedGoalGetV2GetWithHttpInfo(advertiserId: number, landingType: EventManagerOptimizedGoalGetV2V30LandingType, adType: EventManagerOptimizedGoalGetV2V30AdType, assetType: EventManagerOptimizedGoalGetV2V30AssetType, multiAssetType: EventManagerOptimizedGoalGetV2V30MultiAssetType, assetId: number, packageName: string, appType: EventManagerOptimizedGoalGetV2V30AppType, appPromotionType: EventManagerOptimizedGoalGetV2V30AppPromotionType, marketingGoal: EventManagerOptimizedGoalGetV2V30MarketingGoal, quickAppId: number, deliveryMode: EventManagerOptimizedGoalGetV2V30DeliveryMode, miniProgramId: string, dpaAdtype: EventManagerOptimizedGoalGetV2V30DpaAdtype, microPromotionType: EventManagerOptimizedGoalGetV2V30MicroPromotionType, microAppInstanceId: number, deliveryType: EventManagerOptimizedGoalGetV2V30DeliveryType): Promise<ApiResponse<EventManagerOptimizedGoalGetV2V30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }

    if (landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }

    if (adType == null) {
      throw new ApiException("Missing the required parameter 'adType' when calling openApiV30EventManagerOptimizedGoalGetV2Get");
    }
    return this.apiClient.requestWithHttpInfo<EventManagerOptimizedGoalGetV2V30Response>({
      method: "GET",
      path: "/open_api/v3.0/event_manager/optimized_goal/get_v2/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "landing_type", value: landingType },
        { name: "ad_type", value: adType },
        { name: "asset_type", value: assetType },
        { name: "multi_asset_type", value: multiAssetType },
        { name: "asset_id", value: assetId },
        { name: "package_name", value: packageName },
        { name: "app_type", value: appType },
        { name: "app_promotion_type", value: appPromotionType },
        { name: "marketing_goal", value: marketingGoal },
        { name: "quick_app_id", value: quickAppId },
        { name: "delivery_mode", value: deliveryMode },
        { name: "mini_program_id", value: miniProgramId },
        { name: "dpa_adtype", value: dpaAdtype },
        { name: "micro_promotion_type", value: microPromotionType },
        { name: "micro_app_instance_id", value: microAppInstanceId },
        { name: "delivery_type", value: deliveryType }
      ]
    });
  }
}


