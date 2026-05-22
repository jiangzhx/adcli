// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalProjectListV30DataProjectListAdType, LocalProjectListV30DataProjectListBidType, LocalProjectListV30DataProjectListDeepExternalAction, LocalProjectListV30DataProjectListDeliveryGoal, LocalProjectListV30DataProjectListDeliveryPackage, LocalProjectListV30DataProjectListExternalAction, LocalProjectListV30DataProjectListLocalDeliveryScene, LocalProjectListV30DataProjectListMarketingGoal, LocalProjectListV30DataProjectListProjectBudgetMode, LocalProjectListV30DataProjectListProjectStatusFirst, LocalProjectListV30DataProjectListProjectStatusSecond, LocalProjectListV30ResponseDataProjectListInnerPoiInfo, LocalProjectListV30ResponseDataProjectListInnerProductInfo } from "../models";

export interface LocalProjectListV30ResponseDataProjectListInner {
  ad_type?: LocalProjectListV30DataProjectListAdType;
  bid_type?: LocalProjectListV30DataProjectListBidType;
  deep_external_action?: LocalProjectListV30DataProjectListDeepExternalAction;
  delivery_goal?: LocalProjectListV30DataProjectListDeliveryGoal;
  delivery_package?: LocalProjectListV30DataProjectListDeliveryPackage;
  end_time?: string;
  external_action?: LocalProjectListV30DataProjectListExternalAction;
  local_account_id?: number;
  local_delivery_scene?: LocalProjectListV30DataProjectListLocalDeliveryScene;
  marketing_goal?: LocalProjectListV30DataProjectListMarketingGoal;
  name?: string;
  poi_info?: LocalProjectListV30ResponseDataProjectListInnerPoiInfo;
  product_info?: LocalProjectListV30ResponseDataProjectListInnerProductInfo;
  project_bid?: string;
  project_budget?: string;
  project_budget_mode?: LocalProjectListV30DataProjectListProjectBudgetMode;
  project_create_time?: string;
  project_id?: number;
  project_modify_time?: string;
  project_status_first?: LocalProjectListV30DataProjectListProjectStatusFirst;
  project_status_second?: LocalProjectListV30DataProjectListProjectStatusSecond[];
  start_time?: string;
}

