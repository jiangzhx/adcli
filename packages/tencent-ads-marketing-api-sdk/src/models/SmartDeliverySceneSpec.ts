// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { MarketingAssetOuterSpec, MarketingCarrierDetail, MarketingCarrierType, SmartDeliveryGoal, SmartDeliveryGoalSpec } from "../models";

export interface SmartDeliverySceneSpec {
  smart_delivery_goal?: SmartDeliveryGoal;
  smart_delivery_goal_spec?: SmartDeliveryGoalSpec;
  conversion_id_list?: number[];
  marketing_asset_outer_spec?: MarketingAssetOuterSpec;
  marketing_carrier_type?: MarketingCarrierType;
  marketing_carrier_detail?: MarketingCarrierDetail;
}

