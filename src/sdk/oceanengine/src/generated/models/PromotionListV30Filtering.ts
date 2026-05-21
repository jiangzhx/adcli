// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { PromotionListV30FilteringBlueFlowPackageSetting, PromotionListV30FilteringDeliveryMode, PromotionListV30FilteringHasCarryMaterial, PromotionListV30FilteringLearningPhase, PromotionListV30FilteringRejectReasonType, PromotionListV30FilteringStarAutoDeliverySwitch, PromotionListV30FilteringStarDeliveryType, PromotionListV30FilteringStatus, PromotionListV30FilteringStatusFirst, PromotionListV30FilteringStatusSecond } from "../models";

export interface PromotionListV30Filtering {
  blue_flow_package_setting?: PromotionListV30FilteringBlueFlowPackageSetting;
  delivery_mode?: PromotionListV30FilteringDeliveryMode;
  has_carry_material?: PromotionListV30FilteringHasCarryMaterial;
  ids?: number[];
  learning_phase?: PromotionListV30FilteringLearningPhase[];
  name?: string;
  project_id?: number;
  promotion_create_time?: string;
  promotion_modify_end_time?: string;
  promotion_modify_start_time?: string;
  promotion_modify_time?: string;
  reject_reason_type?: PromotionListV30FilteringRejectReasonType[];
  star_auto_delivery_switch?: PromotionListV30FilteringStarAutoDeliverySwitch;
  star_delivery_type?: PromotionListV30FilteringStarDeliveryType;
  status?: PromotionListV30FilteringStatus;
  status_first?: PromotionListV30FilteringStatusFirst;
  status_second?: PromotionListV30FilteringStatusSecond;
}

