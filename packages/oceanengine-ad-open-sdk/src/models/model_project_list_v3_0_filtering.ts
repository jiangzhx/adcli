// Generated from oceanengine/ad_open_sdk_go models/model_project_list_v3_0_filtering.go
// Do not edit manually.

import type { ProjectListV30FilteringAdType, ProjectListV30FilteringAppPromotionType, ProjectListV30FilteringBlueFlowPackageSetting, ProjectListV30FilteringDeliveryMode, ProjectListV30FilteringDeliveryType, ProjectListV30FilteringInventoryType, ProjectListV30FilteringLandingType, ProjectListV30FilteringMarketingGoal, ProjectListV30FilteringPlatform, ProjectListV30FilteringPricing, ProjectListV30FilteringStarAutoDeliverySwitch, ProjectListV30FilteringStarDeliveryType, ProjectListV30FilteringStatus, ProjectListV30FilteringStatusFirst, ProjectListV30FilteringStatusSecond } from "../models/index";

export interface ProjectListV30Filtering {
  ad_type?: ProjectListV30FilteringAdType;
  app_promotion_type?: ProjectListV30FilteringAppPromotionType;
  blue_flow_package_setting?: ProjectListV30FilteringBlueFlowPackageSetting;
  budget_group_id?: number | string;
  delivery_mode?: ProjectListV30FilteringDeliveryMode;
  delivery_type?: ProjectListV30FilteringDeliveryType;
  ids?: number | string[];
  inventory_type?: ProjectListV30FilteringInventoryType;
  landing_type?: ProjectListV30FilteringLandingType;
  marketing_goal?: ProjectListV30FilteringMarketingGoal;
  name?: string;
  platform?: ProjectListV30FilteringPlatform;
  pricing?: ProjectListV30FilteringPricing;
  project_create_time?: string;
  project_modify_end_time?: string;
  project_modify_start_time?: string;
  project_modify_time?: string;
  star_auto_delivery_switch?: ProjectListV30FilteringStarAutoDeliverySwitch;
  star_delivery_type?: ProjectListV30FilteringStarDeliveryType;
  status?: ProjectListV30FilteringStatus;
  status_first?: ProjectListV30FilteringStatusFirst;
  status_second?: ProjectListV30FilteringStatusSecond;
}

