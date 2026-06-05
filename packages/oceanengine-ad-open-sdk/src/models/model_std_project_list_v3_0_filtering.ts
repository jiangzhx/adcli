// 由 oceanengine/ad_open_sdk_go models/model_std_project_list_v3_0_filtering.go 生成
// 不要手动编辑。

import type { StdProjectListV30FilteringAdType, StdProjectListV30FilteringBidType, StdProjectListV30FilteringBlueFlowPackageSetting, StdProjectListV30FilteringBudgetMode, StdProjectListV30FilteringLandingType, StdProjectListV30FilteringMarketingGoal, StdProjectListV30FilteringNativeType, StdProjectListV30FilteringPlatform, StdProjectListV30FilteringPricing, StdProjectListV30FilteringRejectReasonType, StdProjectListV30FilteringStarDeliveryType, StdProjectListV30FilteringStatusFirst, StdProjectListV30FilteringStatusSecond } from "../models/index";

export interface StdProjectListV30Filtering {
  ad_type?: StdProjectListV30FilteringAdType;
  bid_type?: StdProjectListV30FilteringBidType[];
  blue_flow_package_setting?: StdProjectListV30FilteringBlueFlowPackageSetting;
  budget_mode?: StdProjectListV30FilteringBudgetMode;
  landing_type?: StdProjectListV30FilteringLandingType[];
  marketing_goal?: StdProjectListV30FilteringMarketingGoal[];
  name?: string;
  native_type?: StdProjectListV30FilteringNativeType;
  platform?: StdProjectListV30FilteringPlatform[];
  pricing?: StdProjectListV30FilteringPricing;
  project_create_end_time?: string;
  project_create_start_time?: string;
  project_ids?: (number | string)[];
  project_modify_end_time?: string;
  project_modify_start_time?: string;
  reject_reason_type?: StdProjectListV30FilteringRejectReasonType;
  star_delivery_type?: StdProjectListV30FilteringStarDeliveryType[];
  status_first?: StdProjectListV30FilteringStatusFirst;
  status_second?: StdProjectListV30FilteringStatusSecond;
}

