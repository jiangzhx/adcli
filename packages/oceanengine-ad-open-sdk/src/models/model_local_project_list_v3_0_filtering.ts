// Generated from oceanengine/ad_open_sdk_go models/model_local_project_list_v3_0_filtering.go
// Do not edit manually.

import type { LocalProjectListV30FilteringAdType, LocalProjectListV30FilteringBidType, LocalProjectListV30FilteringDeliveryPackage, LocalProjectListV30FilteringLocalDeliveryScene, LocalProjectListV30FilteringMarketingGoal, LocalProjectListV30FilteringProjectStatusFirst, LocalProjectListV30FilteringProjectStatusSecond } from "../models/index";

export interface LocalProjectListV30Filtering {
  ad_type?: LocalProjectListV30FilteringAdType;
  bid_type?: LocalProjectListV30FilteringBidType;
  delivery_package?: LocalProjectListV30FilteringDeliveryPackage;
  local_delivery_scene?: LocalProjectListV30FilteringLocalDeliveryScene;
  marketing_goal?: LocalProjectListV30FilteringMarketingGoal;
  product_ids?: (number | string)[];
  project_create_time_end?: string;
  project_create_time_start?: string;
  project_ids?: (number | string)[];
  project_modify_time_end?: string;
  project_modify_time_start?: string;
  project_name?: string;
  project_status_first?: LocalProjectListV30FilteringProjectStatusFirst;
  project_status_second?: LocalProjectListV30FilteringProjectStatusSecond;
  shop_ids?: (number | string)[];
}

