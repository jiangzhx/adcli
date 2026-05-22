// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalPromotionListV30FilteringAdType, LocalPromotionListV30FilteringBidType, LocalPromotionListV30FilteringBudgetMode, LocalPromotionListV30FilteringLearningPhase, LocalPromotionListV30FilteringLocalDeliveryScene, LocalPromotionListV30FilteringMarketingGoal, LocalPromotionListV30FilteringPromotionStatusFirst, LocalPromotionListV30FilteringPromotionStatusSecond, LocalPromotionListV30FilteringRejectReasonType } from "../models";

export interface LocalPromotionListV30Filtering {
  ad_type?: LocalPromotionListV30FilteringAdType;
  bid_type?: LocalPromotionListV30FilteringBidType;
  budget_mode?: LocalPromotionListV30FilteringBudgetMode;
  learning_phase?: LocalPromotionListV30FilteringLearningPhase;
  local_delivery_scene?: LocalPromotionListV30FilteringLocalDeliveryScene;
  marketing_goal?: LocalPromotionListV30FilteringMarketingGoal;
  project_id?: number;
  promotion_create_time_end?: string;
  promotion_create_time_start?: string;
  promotion_ids?: number[];
  promotion_modify_time_end?: string;
  promotion_modify_time_start?: string;
  promotion_name?: string;
  promotion_status_first?: LocalPromotionListV30FilteringPromotionStatusFirst;
  promotion_status_second?: LocalPromotionListV30FilteringPromotionStatusSecond;
  reject_reason_type?: LocalPromotionListV30FilteringRejectReasonType;
}

